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

  let peekIndex = 0;
const carousel = document.getElementById("peek-carousel");
const totalSlides = 2; // only 2 slides now

function updateCarousel() {
  // Each move shifts 70% width so next slide peeks in
  carousel.style.transform = `translateX(-${peekIndex * 70}%)`;
}

function nextPeekSlide() {
  peekIndex = (peekIndex + 1) % totalSlides; // loop back to first after second
  updateCarousel();
  document.getElementById("nextBtn").style.background = "#FF6600";
  setTimeout(()=>{document.getElementById("nextBtn").style.background="#fff";},300);
}

function prevPeekSlide() {
  peekIndex = (peekIndex - 1 + totalSlides) % totalSlides; // loop back to last when clicking prev
  updateCarousel();
  document.getElementById("prevBtn").style.background = "#FF6600";
  setTimeout(()=>{document.getElementById("prevBtn").style.background="#fff";},300);
}


