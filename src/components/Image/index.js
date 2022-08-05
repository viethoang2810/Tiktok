import { useState, forwardRef } from "react";

const Image = forwardRef(({src , alt , ...props},ref) =>{
    const [fallback,setFallback] = useState('');
    const handleError = () => {
        setFallback('https://lh3.googleusercontent.com/a/AATXAJxw7bk3fYSNvE5P2btVwvyDkwbAfS6XDZZNdQSK=s96-c');
    }


    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError}/>;
})