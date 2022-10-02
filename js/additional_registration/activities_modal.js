$(document).ready(function () {

    $('#activities-plus-icon').click(function (e) {
        $('#activities-modal').css('display', 'block');
    });

    $('#activities-cansell-btn').click(function (e) {

        $('#activities-modal').css('display', 'none');
    });

    $('#activities-save-icon').click(function (e) {
        alert("سیو شد");
    });

    $('form#activities-form').submit(function (e) {
        e.preventDefault();
        let countOfRows = document.getElementById('activities-table').rows.length;
        let currentRow = countOfRows++;
        const form = $('form#activities-form');
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
                <td class="delete-icon-container" title="پاک کردن">
                    <i data-deleteId="${currentRow}" class="fas fa-trash delete-icon  delete-activities-icon"></i>
                </td>
            </tr>
        `).appendTo('table#activities-table');
        $('#activities-modal').css('display', 'none');
        clearFormInputs(form);
        // English numbers to Persian
        traverse(document.body);


        // remove address
        $('.delete-activities-icon').click(function (e) {
            const id = $(this).attr('data-deleteId');
            deleteRow('activities-table', id);
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
