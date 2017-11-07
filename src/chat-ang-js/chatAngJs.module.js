(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('chatAngJs.config', [])
      .value('chatAngJs.config', {
          debug: true
      });

  // Modules
  angular.module('chatAngJs.directives', []);
  angular.module('chatAngJs.filters', []);
  angular.module('chatAngJs.services', []);
  angular.module('chatAngJs',
      [
          'chatAngJs.config',
          'chatAngJs.directives',
          'chatAngJs.filters',
          'chatAngJs.services',
          'ngResource',
          'ngCookies',
          'ngSanitize'
      ]);

})(angular);
