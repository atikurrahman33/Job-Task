function changeImage(element) {
  let mainImage = document.getElementById("mainProductImage");
  mainImage.src = element.src;

  let thumbnails = document.querySelectorAll(".thumbnails img");
  thumbnails.forEach(img => img.classList.remove("active"));

  element.classList.add("active");
}


document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const toggle = item.querySelector('.faq-toggle');
                
                question.addEventListener('click', function() {
                    const isExpanded = item.classList.contains('expanded');
                    
                    if (isExpanded) {
                        item.classList.remove('expanded');
                        toggle.textContent = '+';
                    } else {
                        item.classList.add('expanded');
                        toggle.textContent = '−';
                    }
                });
            });
        });

        function handleResize() {
    const container = document.querySelector('[style*="grid-template-columns"]');
    if (window.innerWidth < 768) {
      container.style.gridTemplateColumns = "1fr"; 
    } else {
      container.style.gridTemplateColumns = "1fr 1fr"; 
    }
  }
  window.addEventListener('resize', handleResize);
  window.addEventListener('load', handleResize);