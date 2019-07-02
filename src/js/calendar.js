import Calendar from 'tui-calendar'; /* ES6 */

let calendar = new Calendar({
  defaultView: 'month',
  taskView: true,
  disableClick: true,
  scheduleView: 'allday',
  template: {
    monthGridHeader: function(model) {
      var date = new Date(model.date);
      var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
      return template;
    }
  }
});