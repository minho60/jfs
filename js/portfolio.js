$(document).ready(function () {
    datas.forEach((data, idx) => {
        const desc = data.description
            .map((ele) => `<li>${ele}</li>`)
            .join("");

        const card = `<div class="box_office_card motion position-relative">
                <div class="inner">
                    <div class="front">
                        <span class="rank">${data.rank}</span>
                        <div class="poster">
                            <img class="w-100 h-100 object-fit-cover" src="${data.poster}" alt="${data.title}">
                        </div>
                    </div> <!-- //.front -->
                    <div class="back">
                        <ul>
                            ${desc}
                        </ul>
                    <div class="worktime">작업시간<span>${data.worktime}</span></div>
                    </div><!-- //.back -->
                </div>
                <div class="btn">
                    <button type="button" class="like p-0">${data.task}</button>
                    <a href="${data.siteurl}" class="btn btn-info text-white reservation_link">사이트 바로가기</a>
                </div>
            </div>`;
        $(".portfolio").append(card);
    }); /* forEach end */
});
