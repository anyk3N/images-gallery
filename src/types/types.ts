export interface UnsplashPhoto {
  id: string;
  
  urls: {
        small: string;
  };

  cover_photo: {
    urls: {
        small: string;
  };
  }
  alt_description?: string;
  title: string;
  links: {
    html: string;
  };
}

export interface CardProps {
    url: string,
    category?: string;
    title?: string;
    body?: string;
    onClick?: () => void
}

export interface NavButtonProps {
    navUrl: string; 
    title:  string;
    isActive: boolean;
}

