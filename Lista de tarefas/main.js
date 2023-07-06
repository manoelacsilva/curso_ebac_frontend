$(document).ready(function() {
    $('form button').click(function() {
        $('form').slideDown();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<span>${novaTarefa}</span>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).click(function() {
            $(this).toggleClass('tarefa-feita');
        });
        $('#nova-tarefa').val('');
    });

    $('li').click(function() {
        $(this).toggleClass('tarefa-feita');
    });
});