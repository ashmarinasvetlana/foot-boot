window.addEventListener('DOMContentLoaded', function () {

    const sertOne = document.querySelector('.file-1'),
        sertTwo = document.querySelector('.file-2'),
        modalSertOne =document.querySelector('.sert-1'),
        modalSertTwo =document.querySelector('.sert-2'),
        popup = document.querySelectorAll('.popup'),
        close = document.querySelectorAll('.popup-close');




    sertOne.addEventListener('click', function () {

            modalSertOne.style.display = 'block';
            document.body.style.overflow = "hidden";

    });

    sertTwo.addEventListener('click', function () {

            modalSertTwo.style.display = 'block';
            document.body.style.overflow = "hidden";


    });

  
    document.body.addEventListener('click', (event) => {

            const target = event.target;
            if (target && target.classList.contains('popup-close')) {

                    close.forEach((item, i) => {
                            if (target == item) {
                                    popup.forEach(item => {
                                            item.style.display = "none";
                                            document.body.style.overflow = "";
                                    });

                            }
                    });


            }

            if (target && target.classList.contains('popup')) {

                popup.forEach((item, i) => {
                        if (target == item) {
                                popup.forEach(item => {
                                        item.style.display = "none";
                                        document.body.style.overflow = "";
                                });

                        }
                });
        }

    });






});