'use strict';

{
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  months.forEach(month => {
    const link = document.getElementById(`pdfLink_${month}`);
    if (!link) return;
    const url = link.getAttribute("href");

    fetch(url, { method: 'HEAD' }).then(res => {
      if (res.ok) {
        link.onclick = () => {
          gtag('event', 'download_pdf', {
            event_category: 'PDF',
            event_label: `${month}.japanese.pdf`
          });
        };
      } else {
        disableLink(link);
      }
    }).catch(() => disableLink(link));

    function disableLink(link) {
      link.removeAttribute("href");
      link.removeAttribute("download");
      link.style.pointerEvents = "none";
      link.style.opacity = "0.5";
      link.innerText = `${link.innerText.replace("PDF", "")}（準備中）`;
    }
  });
}