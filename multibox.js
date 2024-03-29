var Multibox = /** @class */ (function () {

    function Multibox(instance, boxData, rowData) {
        this.instance = instance;
        this.boxData = boxData;
        this.rowData = rowData;

    }
    Multibox.prototype.getBox = function () {

        var box_id = $(this.instance).attr('data-index');
        $(this.instance).attr('data-index', parseInt(box_id) + 1);

        var data = {
            box: box_id,
            row: '0',
            instance: this.instance
        };

        var b = $(this.instance).find('.box');
        this.boxData(data, function (html) {
            b.last().after(html.view).next().attr('box-index', data.box).attr('row-index', data.row);
            var box_count = parseInt(b.length) - 1;
            if (box_count != 0) {
                b.last().find('.add-box').hide();
                b.last().find('.remove-box').show();
            }
        });
    };
    Multibox.prototype.getRow = function (el, target) {
        //var target = $(el).parent().parent();

        var row_id = $(target).attr('row-index');
        $(target).attr('row-index', parseInt(row_id) + 1);

        var data = {
            box: $(target).attr('box-index'),
            row: parseInt(row_id) + 1,
            instance: this.instance
        };

        this.rowData(data, function (html) {
            $(target).find('.remove-row').show();
            $(target).find('.data-row').last().after(html.view);
            $(el).remove();
        });
    };

    Multibox.prototype.deleteBox = function (el, id, cb) {
        if (id && cb) {
            cb(el, id);
        }
        else {
            $(el).remove();
        }
    };

    Multibox.prototype.deleteRow = function (el, id, cb) {
        if (id && cb) {
            cb(el, id);
        }
        else {
            $(el).remove();
        }
    };
    return Multibox;
}());