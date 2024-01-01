// 테그 생성-반환기 ("태그이름", 요소)
function newElement(tagName, location) {
    const element = document.createElement(tagName);
    location.appendChild(element);
    return location.querySelector(tagName+':last-of-type');
}

// 태그 드롭다운 생성기
export function newDropdown(instance, location) {
    const name = instance.name;
    const list = instance.list;

    const select = newElement('select', location); // select 생성 및 객체화
    select.setAttribute('name', name.value); // select name속성 추가

    const title = newElement('option', select); // title용 option
    title.setAttribute('selected', true); // 기본 selected
    title.setAttribute('disabled', true); // 이후, 선택 불가
    title.innerText = name.text;

    for (const element of list) {
        const option = newElement('option', select); // option 생성 및 객체화
        option.setAttribute('value', element.value); // option value속성 추가
        option.innerText = element.text; // option 유저 보여줄 텍스트 입력
    }
}