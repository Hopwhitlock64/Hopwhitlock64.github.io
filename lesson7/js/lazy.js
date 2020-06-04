const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source){
        return;
    }
    img.src = source;
}
const options = {threshold: .5};
const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else{
                preloadImage(entry.target); //entry.target becomes img
                io.unobserve(entry.target); // once shown, stops observing
            }
        }); 
    }, options
); 
images.forEach(image => {
    io.observe(image);
});
