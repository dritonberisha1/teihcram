module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ENVIRONMENTS = {\n  LOCALHOST: 'localhost',\n  TESTING: 'testing',\n  PRODUCTION: 'production'\n};\nconst settings = {\n  environment: process.env.AWS_EXECUTION_ENV ? ENVIRONMENTS.PRODUCTION : process.env.ENVIRONMENT,\n  awsRegion: process.env.AWS_REGION\n};\n\nif (settings.environment !== ENVIRONMENTS.PRODUCTION) {\n  aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config.update({\n    accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n    region: process.env.AWS_REGION,\n    endpoint: process.env.AWS_DYNAMODB_ENDPOINT\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  AWS: aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a,\n  environments: ENVIRONMENTS,\n  settings: settings\n});\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handler\", function() { return handler; });\n/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-http */ \"serverless-http\");\n/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_team_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/team-routes */ \"./routes/team-routes.js\");\n/* harmony import */ var _routes_company_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/company-routes */ \"./routes/company-routes.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ \"./config.js\");\n\n\n\n\n //ROUTES\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({\n  extended: false\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()()); //USE ROUTES\n\napp.use('/companies', _routes_company_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use('/teams', _routes_team_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); // catch 404 and forward to error handler\n\napp.use((request, response, next) => {\n  console.error('Path not found:', request.originalUrl);\n  let err = new Error('Not Found');\n  err.status = 404;\n  next(err);\n}); // error handler\n\napp.use((error, request, response) => {\n  console.error(error);\n  const errorStatus = 500;\n  response.status(error.statusCode || errorStatus).json(error);\n});\nconst handler = serverless_http__WEBPACK_IMPORTED_MODULE_0___default()(app, {\n  request: function (request, event\n  /*, context */\n  ) {\n    // extracting a user identity\n    const requestContext = event && event.requestContext;\n    request.identity = requestContext && requestContext.identity || {};\n\n    if (_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].settings.environment === _config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].environments.LOCALHOST) {\n      // Emulating a user identity for local testing\n      request.identity = {\n        claims: {\n          sub: request.identity.claims && request.identity.claims.sub\n        }\n      };\n    }\n\n    request.user = identityToUser(request.identity);\n  }\n});\n/**\r\n * Convert identity to user object, extracting the required claims into user fields\r\n * \r\n * @param {object} identity Context identity\r\n * \r\n * @returns {object} User object... returns null if provided identity is null or undefined\r\n */\n\nfunction identityToUser(identity) {\n  if (!identity) return null;\n  const user = {\n    id: identity.claims && identity.claims.sub,\n    email: identity.claims && identity.claims.email,\n    fullName: identity.claims && identity.claims.name,\n    username: identity.claims && (identity.claims.username || identity.claims['cognito:username']),\n    claims: []\n  };\n\n  for (let property in identity.claims) {\n    user.claims.push({\n      name: property,\n      value: identity.claims[property]\n    });\n  }\n\n  return user;\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./repositories/base-repository.js":
/*!*****************************************!*\
  !*** ./repositories/base-repository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseRepository; });\nclass BaseRepository {\n  /**\r\n   * Prunes all properties where value is null, undefined, or an empty string.\r\n   * \r\n   * @param {object} data Data object to prune\r\n   * \r\n   * @returns {object} Pruned object\r\n   */\n  _pruneEmptyProperties(data) {\n    const emptyProperties = [];\n\n    for (let property in data) {\n      if (!data[property] || data[property].length === 0) {\n        emptyProperties.push(property);\n      } else if (typeof data[property] === 'object') {\n        data[property] = this._pruneEmptyProperties(data[property]);\n      }\n    }\n\n    for (let index = 0; index < emptyProperties.length; index++) {\n      delete data[emptyProperties[index]];\n    }\n\n    return data;\n  }\n\n}\n\n//# sourceURL=webpack:///./repositories/base-repository.js?");

/***/ }),

/***/ "./repositories/company-repository.js":
/*!********************************************!*\
  !*** ./repositories/company-repository.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _base_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-repository */ \"./repositories/base-repository.js\");\n\n\nconst {\n  AWS\n} = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst companyTableName = process.env.AWS_DYNAMODB_COMPANIES_TABLE_NAME;\n\nclass CompanyRepository extends _base_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  async fetchCompanies() {\n    const docClient = new AWS.DynamoDB.DocumentClient();\n    const params = {\n      TableName: companyTableName\n    };\n    const response = await docClient.scan(params).promise();\n    return response && response.Items;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new CompanyRepository());\n\n//# sourceURL=webpack:///./repositories/company-repository.js?");

/***/ }),

/***/ "./repositories/team-repository.js":
/*!*****************************************!*\
  !*** ./repositories/team-repository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _base_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-repository */ \"./repositories/base-repository.js\");\n\n\n\n\nconst {\n  AWS\n} = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst teamTableName = process.env.AWS_DYNAMODB_TEAMS_TABLE_NAME;\n\nclass TeamRepository extends _base_repository__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n  async createTeam(team) {\n    const entity = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge({}, this._pruneEmptyProperties(team));\n\n    entity.id = uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();\n    entity.createdOn = new Date().toISOString();\n    const docClient = new AWS.DynamoDB.DocumentClient();\n    const params = {\n      TableName: teamTableName,\n      Item: entity\n    };\n    return await docClient.put(params).promise().then(() => {\n      return entity;\n    }).catch(error => error);\n  }\n\n  async fetchTeams() {\n    const docClient = new AWS.DynamoDB.DocumentClient();\n    const params = {\n      TableName: teamTableName\n    };\n    const response = await docClient.scan(params).promise();\n    return response && response.Items;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new TeamRepository());\n\n//# sourceURL=webpack:///./repositories/team-repository.js?");

/***/ }),

/***/ "./routes/company-routes.js":
/*!**********************************!*\
  !*** ./routes/company-routes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/company-service */ \"./services/company-service.js\");\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.get('/', async (request, response) => {\n  try {\n    const result = await _services_company_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchCompanies();\n    return response.json(result);\n  } catch (error) {\n    console.error(\"FETCH_COMPANIES_ERROR\", error);\n    return response.status(500).json({\n      message: 'Inernal Server Error'\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/company-routes.js?");

/***/ }),

/***/ "./routes/team-routes.js":
/*!*******************************!*\
  !*** ./routes/team-routes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/team-service */ \"./services/team-service.js\");\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.post('/', async (request, response) => {\n  try {\n    const result = await _services_team_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTeam(request.body, request.user);\n    return response.json(result);\n  } catch (error) {\n    console.error(\"CREAT_TEAM_ERROR\", error);\n    return response.status(500).json({\n      message: 'Inernal Server Error'\n    });\n  }\n});\nrouter.get('/', async (request, response) => {\n  try {\n    const result = await _services_team_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchTeams();\n    return response.json(result);\n  } catch (error) {\n    console.error(\"FETCH_TEAMS_ERROR\", error);\n    return response.status(500).json({\n      message: 'Inernal Server Error'\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/team-routes.js?");

/***/ }),

/***/ "./services/company-service.js":
/*!*************************************!*\
  !*** ./services/company-service.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _repositories_company_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/company-repository */ \"./repositories/company-repository.js\");\n\n\nclass CompanyService {\n  async fetchCompanies() {\n    return _repositories_company_repository__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchCompanies();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new CompanyService());\n\n//# sourceURL=webpack:///./services/company-service.js?");

/***/ }),

/***/ "./services/team-service.js":
/*!**********************************!*\
  !*** ./services/team-service.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _repositories_team_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/team-repository */ \"./repositories/team-repository.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass TeamService {\n  async createTeam(team, user) {\n    const teamWithEmail = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.merge({}, team, {\n      email: user && user.email\n    });\n\n    return _repositories_team_repository__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTeam(teamWithEmail);\n  }\n\n  async fetchTeams() {\n    return _repositories_team_repository__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchTeams();\n  }\n\n  async getTotalMinutes() {\n    return 20;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new TeamService());\n\n//# sourceURL=webpack:///./services/team-service.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serverless-http\");\n\n//# sourceURL=webpack:///external_%22serverless-http%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ })

/******/ });