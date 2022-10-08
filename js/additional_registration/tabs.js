$(document).ready(function () {
    let tableVisibility = {
        address_table: 1,
        other_people_table: 0,
        accounts_table: 0,
        activities_table: 0,
        products_table: 0,
        activity_area_table: 0,
        document_table: 0,
    };
    $('li#address-table-tab').click(function (e) {
        setValueToTableKeys('address_table');
        visibleSelectedTable();
    });
    $('li#other-people-table-tab').click(function (e) {
        setValueToTableKeys('other_people_table');
        visibleSelectedTable();
    });
    $('li#accounts-table-tab').click(function (e) {
        setValueToTableKeys('accounts_table');
        visibleSelectedTable();
    });
    $('li#activities-table-tab').click(function (e) {
        setValueToTableKeys('activities_table');
        visibleSelectedTable();
    });
    $('li#products-table-tab').click(function (e) {
        setValueToTableKeys('products_table');
        visibleSelectedTable();
    });
    $('li#activity-area-table-tab').click(function (e) {
        setValueToTableKeys('activity_area_table');
        visibleSelectedTable();
    });
    $('li#documents-table-tab').click(function (e) {
        setValueToTableKeys('document_table');
        visibleSelectedTable();
    });
    visibleSelectedTable();
    function visibleSelectedTable() {
        for (let i in tableVisibility) {
            if (tableVisibility[i] == 1) {
                $(`#${i}_container`).css('display', 'block');
            } else {
                $(`#${i}_container`).css('display', 'none');
            }
        }
    }

    function setValueToTableKeys(expectedTable) {
        for (let j in tableVisibility) {
            tableVisibility[j] = 0;
            if (j === expectedTable) {
                tableVisibility[j] = 1;
            }
        }
    }

    // responsive menue
    $('#tab-button').click(function (e) {
        e.preventDefault();
        let tabsDisplay = $('#tabs').css('display');
        if (tabsDisplay == 'none') {
            $('#tabs').show();
        } else {
            $('#tabs').hide();
        }
    });

});