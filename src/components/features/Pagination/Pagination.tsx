import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  total: number;
  perPage?: number;
  onChange: (page: number) => void;
}

const Pagination = ({ page, total, perPage = 12, onChange }: PaginationProps) => {
  const totalPages = Math.ceil(total / perPage);
  if (totalPages <= 1) return null;

  const maxVisible = 4;
  let start = 1;
  let end = Math.min(totalPages, maxVisible);

  if (page > maxVisible) {
    start = page - maxVisible + 1;
    end = page;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(
      <button
        key={i}
        className={i === page ? styles.activePage : styles.pageBtn}
        onClick={() => onChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.pagination}>
      {start > 1 && (
        <button className={styles.pageBtn} onClick={() => onChange(start - 1)}>
          &lt;
        </button>
      )}
      {pages}
      {end < totalPages && (
        <button className={styles.pageBtn} onClick={() => onChange(end + 1)}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;