$(document).ready(function () {

    // other people modal
    $('#other-people-plus-icon').click(function (e) {
        $('#other-people-modal').css('display', 'block');
    });

    $('#other-people-cansell-btn').click(function (e) {
        $('#other-people-modal').css('display', 'none');
    });

    $('#other-people-save-icon').click(function (e) {
        alert("سیو شد");
    });

    $('form#other-people-form').submit(function (e) {
        e.preventDefault();
        let countOfRows = document.getElementById('other-people-table').rows.length;
        let currentRow = countOfRows++;
        const form = $('form#other-people-form');
        let formData = form.serializeArray();
        $(`
            <tr>
                <td data-rowId="${currentRow}"></td>
                <td>${formData[0]['value']}</td>
                <td>${formData[1]['value']}</td>
                <td>${formData[2]['value']}</td>
                <td>${formData[3]['value']}</td>
                <td>${formData[4]['value']}</td>
                <td>${formData[5]['value']}</td>
                <td>${formData[6]['value']}</td>
                <td>${formData[7]['value']}</td>
                <td>${formData[8]['value']}</td>
                <td>${formData[9]['value']}</td>
                <td>${formData[10]['value']}</td>
                <td class="delete-icon-container" title="پاک کردن">
                    <i data-deleteId="${currentRow}" class="fas fa-trash delete-icon  delete-other-people-icon"></i>
                </td>
            </tr>
        `).appendTo('table#other-people-table');
        $('#other-people-modal').css('display', 'none');
        clearFormInputs(form);
        // English numbers to Persian
        traverse(document.body);


        // remove address
        $('.delete-other-people-icon').click(function (e) {
            const id = $(this).attr('data-deleteId');
            deleteRow('other-people-table', id);
        });
        function deleteRow(tableId, expectedId) {
            let tableRows = document.getElementById(tableId).rows;
            for (let index = 1; index < tableRows.length; index++) {
                let row = tableRows[index];
                let rowId = row.querySelector('td').getAttribute('data-rowId');
                if (rowId == expectedId) {
                    row.remove();
                }
            }
        }
        function clearFormInputs(form) {
            form.find("input[type=text], input[type=number],input[type=email]").val("");
        }
    });
    // convertion english numbers to persian
    persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
    function traverse(el) {
        if (el.nodeType == 3) {
            var list = el.data.match(/[0-9]/g);
            if (list != null && list.length != 0) {
                for (var i = 0; i < list.length; i++)
                    el.data = el.data.replace(list[i], persian[list[i]]);
            }
        }
        for (var i = 0; i < el.childNodes.length; i++) {
            traverse(el.childNodes[i]);
        }
    }
    // convertion english numbers to persian
});