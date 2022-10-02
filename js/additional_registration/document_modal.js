$(document).ready(function () {

    $('#document-plus-icon').click(function (e) {
        $('#document-modal').css('display', 'block');
    });

    $('#document-cansell-btn').click(function (e) {

        $('#document-modal').css('display', 'none');
    });

    $('#document-save-icon').click(function (e) {
        alert("سیو شد");
    });

    $('form#document-form').submit(function (e) {
        e.preventDefault();
        let countOfRows = document.getElementById('document-table').rows.length;
        let currentRow = countOfRows++;
        const form = $('form#document-form');
        let formData = form.serializeArray();
        $(`
            <tr>
                <td data-rowId="${currentRow}"></td>
                <td>${formData[0]['value']}</td>
                <td>${formData[1]['value']}</td>
                <td>${formData[2]['value']}</td>
                <td>${formData[3]['value']}</td>
                <td class="delete-icon-container" title="پاک کردن">
                    <i data-deleteId="${currentRow}" class="fas fa-trash delete-icon  delete-document-icon"></i>
                </td>
            </tr>
        `).appendTo('table#document-table');
        $('#document-modal').css('display', 'none');
        clearFormInputs(form);
        // English numbers to Persian
        traverse(document.body);


        // remove address
        $('.delete-document-icon').click(function (e) {
            const id = $(this).attr('data-deleteId');
            deleteRow('document-table', id);
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
