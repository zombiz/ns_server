angular.module('mnLogs').controller('mnLogsListController',
  function ($scope, mnHelper, mnLogsService, mnPoll) {

    mnPoll.start($scope, mnLogsService.getLogs).subscribe(function (logs) {
      $scope.logs = logs.data.list;
    }).keepIn("logsState");

    mnHelper.cancelCurrentStateHttpOnScopeDestroy($scope);

  }).filter('moduleCode', function () {
    return function (code) {
      return new String(1000 + parseInt(code)).slice(-3);
    };
  });