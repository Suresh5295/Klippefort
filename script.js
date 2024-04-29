// Imagen slider
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.imgcontainer img');
  const arrowRight = document.querySelector('.ar2');
  const arrowLeft = document.querySelector('.ar1');

  arrowRight.addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
  });

  arrowLeft.addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
  });



  let imageIndex = 0;
  
       
        const proImages = document.querySelectorAll('.posimg img');
        const arrow1 = document.getElementById('arrowleft');
        const arrow2 = document.getElementById('arrowright');

        arrow1.addEventListener('click', function() {
            proImages[imageIndex].style.display = 'none';
            imageIndex = (imageIndex + 1) % proImages.length;
            proImages[imageIndex].style.display = 'block';
        });
        

        arrow2.addEventListener('click', function() {
            proImages[imageIndex].style.display = 'none';
            imageIndex = (imageIndex - 1 + proImages.length) % proImages.length;
            proImages[imageIndex].style.display = 'block';
        });

        let headIndex = 0;
        let scrollInterval;
        const proheading = document.querySelectorAll('.postit h1');
        const arr1 = document.getElementById('arrowleft');
        const arr2 = document.getElementById('arrowright');

        arr1.addEventListener('click', function() {
        
          proheading[headIndex].style.display = 'none';
          headIndex = (headIndex + 1) % proheading.length;
            proheading[headIndex].style.display = 'block';
        }
      );
      arr2.addEventListener('click', function() {
        
        proheading[headIndex].style.display = 'none';
        headIndex = (headIndex + 1) % proheading.length;
          proheading[headIndex].style.display = 'block';
      }
    );
    

 
   
   
    