// Código JavaScript para manejar la interacción con las estrellas y actualizar el gráfico circular
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingContainer = document.getElementById("star-rating");
    const chart = document.getElementById("rating-chart");
    const percentageText = document.getElementById("rating-percentage");

    stars.forEach((star) => {
      star.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        ratingContainer.setAttribute("data-rating", value);
        updateRating();
      });

      star.addEventListener("mouseover", function () {
        const value = this.getAttribute("data-value");
        highlightStars(value);
      });

      star.addEventListener("mouseout", function () {
        updateRating();
      });
    });

    function highlightStars(value) {
      stars.forEach((star) => {
        if (star.getAttribute("data-value") <= value) {
          star.classList.add("selected");
        } else {
          star.classList.remove("selected");
        }
      });
    }

    function updateRating() {
      const selectedStars = document.querySelectorAll(".star.selected");
      const ratingValue = selectedStars.length > 0 ? selectedStars.length : 0;
      ratingContainer.setAttribute("data-rating", ratingValue);
      highlightStars(ratingValue);
      updateChart(ratingValue);
    }

    function updateChart(rating) {
      const percentage = (rating / 5) * 100;
      chart.style.backgroundImage = `conic-gradient(#ffcc00 0% ${percentage}%, #eee ${percentage}% 100%)`;
      percentageText.textContent = `${percentage}%`;
    }
  });