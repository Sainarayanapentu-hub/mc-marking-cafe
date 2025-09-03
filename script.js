const track = document.getElementById('sliderTrack');
    let index = 0;

    function slide(direction) {
      const cards = document.querySelectorAll('.card');
      const total = cards.length;
      const cardWidth = cards[0].offsetWidth + 20; // width + margin

      index += direction;
      if (index < 0) index = 0;
      if (index > total - 1) index = total - 1;

      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
