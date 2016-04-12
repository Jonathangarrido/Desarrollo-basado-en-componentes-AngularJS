angular.module('cuentaClick', [])


.component('cuentaClick',{
  templateUrl: './js/components/cuenta-click/cuenta-click.html',
  controller: function() {
    var vm = this;
    vm.clicks = 0;
    vm.incrementa = function () {
      vm.clicks ++;
    }
  }
});