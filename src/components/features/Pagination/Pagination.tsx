import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                 currentPage,
                                                 totalPages,
                                                 onPageChange
                                               }) => {

  const getVisiblePages = (): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    pages.push(1);

    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    if (currentPage <= 4) {
      endPage = 5;
    } else if (currentPage >= totalPages - 3) {
      startPage = totalPages - 4;
    }

    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Добавляем многоточие перед последней страницей если нужно
    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    // Всегда показываем последнюю страницу
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) {
    return null; // Не показываем пагинацию если всего 1 страница
  }

  return (
      <div className={styles.pagination}>
        {/* Кнопка "Назад" */}
        <button
            className={styles.arrowButton}
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Предыдущая страница"
        >
          ←
        </button>

        {/* Нумерация страниц */}
        {visiblePages.map((page, index) => (
            <button
                key={index}
                className={`${styles.pageButton} ${
                    page === currentPage ? styles.active : ''
                } ${page === '...' ? styles.ellipsis : ''}`}
                disabled={page === '...' || page === currentPage}
                onClick={() => typeof page === 'number' && onPageChange(page)}
                aria-current={page === currentPage ? 'page' : undefined}
                aria-label={
                  page === '...'
                      ? 'More pages'
                      : `Page ${page}`
                }
            >
              {page}
            </button>
        ))}

        {/* Кнопка "Вперед" */}
        <button
            className={styles.arrowButton}
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Следующая страница"
        >
          →
        </button>
      </div>
  );
};

export default Pagination;