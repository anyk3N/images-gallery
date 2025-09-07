export interface UnsplashPhoto {
  id: string;
  urls: {
      regular: string;
  };
  cover_photo: {
    urls: {
        regular: string;
  };
  }
  alt_description?: string;
  title: string;
  links: {
    html: string;
  };
}

export interface UnsplashSearchResponse {
  total: number;
  results: UnsplashPhoto[];
}

export interface CardProps {
    url: string,
    category?: string;
    title?: string;
    onClick?: () => void
}

export interface NavButtonProps {
    navUrl: string; 
    title:  string;
    isActive: boolean;
}

export interface PhotoModalProps {
  photos: { url: string; title?: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export interface SelectorProps {
    options: {
        value: string,
        name: string,
    }[];
    defaultValue: string;
    // onSortChange: (value: string) => void;
}

export interface PaginationProps {
  totalPages: number;
  perPage?: number;
  onChange: (page: number) => void;
}