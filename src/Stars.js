// Código JavaScript para manejar la interacción con las estrellas y actualizar el gráfico circular
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.descripcion');

  sections.forEach(section => {
    const stars = section.querySelectorAll(".star");
    const chart = section.querySelector(".chart");
    const percentage = section.querySelector(".percentage");

    let totalVotes = 0;
    let totalRating = 0;
    let sectionRated = false;

    stars.forEach((star, index) => {
      star.addEventListener("click", function () {
        if (!sectionRated) {
          const value = index + 1;

          totalVotes++;
          totalRating += value;

          const averageRating = totalVotes === 0 ? 0 : totalRating / totalVotes;
          const percentageValue = Math.round((averageRating / 5) * 100);
          percentage.textContent = `${percentageValue}%`;

          sectionRated = true;

          stars.forEach((s, i) => {
            s.classList.remove("selected");
            if (i < value) {
              s.classList.add("selected");
            }
          });

          console.log(`Sección ${section.getAttribute("data-section-id")} - Valoración: ${value}`);
          console.log(`Sección ${section.getAttribute("data-section-id")} - Valoración total: ${averageRating}`);
        }
      });
    });
  });
});