var DataTypes = require("sequelize").DataTypes;
var _alternatives = require("./alternatives");
var _availabilities = require("./availabilities");
var _certificates = require("./certificates");
var _cities = require("./cities");
var _companies = require("./companies");
var _countries = require("./countries");
var _desired_positions = require("./desired_positions");
var _educations = require("./educations");
var _employment_statuses = require("./employment_statuses");
var _languages = require("./languages");
var _levels = require("./levels");
var _matches = require("./matches");
var _quiestions = require("./quiestions");
var _roles = require("./roles");
var _skills = require("./skills");
var _soft_skills = require("./soft_skills");
var _states = require("./states");
var _status = require("./status");
var _tests = require("./tests");
var _type_skills = require("./type_skills");
var _user_languages = require("./user_languages");
var _user_profile_skills = require("./user_profile_skills");
var _user_profile_soft_skills = require("./user_profile_soft_skills");
var _user_profiles = require("./user_profiles");
var _users = require("./users");
var _visas = require("./visas");
var _visas_has_user_profiles = require("./visas_has_user_profiles");
var _work_modes = require("./work_modes");

function initModels(sequelize) {
  var alternatives = _alternatives(sequelize, DataTypes);
  var availabilities = _availabilities(sequelize, DataTypes);
  var certificates = _certificates(sequelize, DataTypes);
  var cities = _cities(sequelize, DataTypes);
  var companies = _companies(sequelize, DataTypes);
  var countries = _countries(sequelize, DataTypes);
  var desired_positions = _desired_positions(sequelize, DataTypes);
  var educations = _educations(sequelize, DataTypes);
  var employment_statuses = _employment_statuses(sequelize, DataTypes);
  var languages = _languages(sequelize, DataTypes);
  var levels = _levels(sequelize, DataTypes);
  var matches = _matches(sequelize, DataTypes);
  var quiestions = _quiestions(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var skills = _skills(sequelize, DataTypes);
  var soft_skills = _soft_skills(sequelize, DataTypes);
  var states = _states(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var tests = _tests(sequelize, DataTypes);
  var type_skills = _type_skills(sequelize, DataTypes);
  var user_languages = _user_languages(sequelize, DataTypes);
  var user_profile_skills = _user_profile_skills(sequelize, DataTypes);
  var user_profile_soft_skills = _user_profile_soft_skills(sequelize, DataTypes);
  var user_profiles = _user_profiles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var visas = _visas(sequelize, DataTypes);
  var visas_has_user_profiles = _visas_has_user_profiles(sequelize, DataTypes);
  var work_modes = _work_modes(sequelize, DataTypes);

  user_profiles.belongsToMany(visas, { as: 'visas_id_visas', through: visas_has_user_profiles, foreignKey: "user_profiles_id", otherKey: "visas_id" });
  visas.belongsToMany(user_profiles, { as: 'user_profiles_id_user_profiles', through: visas_has_user_profiles, foreignKey: "visas_id", otherKey: "user_profiles_id" });
  quiestions.belongsTo(alternatives, { as: "alternatives_alternative", foreignKey: "alternatives"});
  alternatives.hasMany(quiestions, { as: "quiestions", foreignKey: "alternatives"});
  user_profiles.belongsTo(availabilities, { as: "availability_availability", foreignKey: "availability"});
  availabilities.hasMany(user_profiles, { as: "user_profiles", foreignKey: "availability"});
  user_profiles.belongsTo(cities, { as: "city", foreignKey: "city_id"});
  cities.hasMany(user_profiles, { as: "user_profiles", foreignKey: "city_id"});
  matches.belongsTo(companies, { as: "company_company", foreignKey: "company"});
  companies.hasMany(matches, { as: "matches", foreignKey: "company"});
  states.belongsTo(countries, { as: "country", foreignKey: "countries_id"});
  countries.hasMany(states, { as: "states", foreignKey: "countries_id"});
  companies.belongsTo(desired_positions, { as: "desired_positions_desired_position", foreignKey: "desired_positions"});
  desired_positions.hasMany(companies, { as: "companies", foreignKey: "desired_positions"});
  user_profiles.belongsTo(desired_positions, { as: "desired_position", foreignKey: "desired_position_id"});
  desired_positions.hasMany(user_profiles, { as: "user_profiles", foreignKey: "desired_position_id"});
  user_profiles.belongsTo(employment_statuses, { as: "employment_status", foreignKey: "employment_status_id"});
  employment_statuses.hasMany(user_profiles, { as: "user_profiles", foreignKey: "employment_status_id"});
  user_languages.belongsTo(languages, { as: "language", foreignKey: "languages_id"});
  languages.hasMany(user_languages, { as: "user_languages", foreignKey: "languages_id"});
  user_languages.belongsTo(levels, { as: "level", foreignKey: "level_id"});
  levels.hasMany(user_languages, { as: "user_languages", foreignKey: "level_id"});
  user_profile_skills.belongsTo(levels, { as: "level", foreignKey: "level_id"});
  levels.hasMany(user_profile_skills, { as: "user_profile_skills", foreignKey: "level_id"});
  companies.belongsTo(matches, { as: "id_match", foreignKey: "id"});
  matches.hasOne(companies, { as: "company", foreignKey: "id"});
  tests.belongsTo(quiestions, { as: "quiestion_quiestion", foreignKey: "quiestion"});
  quiestions.hasMany(tests, { as: "tests", foreignKey: "quiestion"});
  users.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(users, { as: "users", foreignKey: "role_id"});
  user_profile_skills.belongsTo(skills, { as: "skill", foreignKey: "skills_id"});
  skills.hasMany(user_profile_skills, { as: "user_profile_skills", foreignKey: "skills_id"});
  user_profile_soft_skills.belongsTo(soft_skills, { as: "soft_skill", foreignKey: "soft_skill_id"});
  soft_skills.hasMany(user_profile_soft_skills, { as: "user_profile_soft_skills", foreignKey: "soft_skill_id"});
  cities.belongsTo(states, { as: "state", foreignKey: "states_id"});
  states.hasMany(cities, { as: "cities", foreignKey: "states_id"});
  users.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(users, { as: "users", foreignKey: "status_id"});
  skills.belongsTo(type_skills, { as: "type_skill", foreignKey: "type_skills_id"});
  type_skills.hasMany(skills, { as: "skills", foreignKey: "type_skills_id"});
  tests.belongsTo(user_profile_skills, { as: "user_profile_skills_user_profile_skill", foreignKey: "user_profile_skills"});
  user_profile_skills.hasMany(tests, { as: "tests", foreignKey: "user_profile_skills"});
  certificates.belongsTo(user_profiles, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profiles.hasMany(certificates, { as: "certificates", foreignKey: "user_profile_id"});
  educations.belongsTo(user_profiles, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profiles.hasMany(educations, { as: "educations", foreignKey: "user_profile_id"});
  matches.belongsTo(user_profiles, { as: "user_profiles_user_profile", foreignKey: "user_profiles"});
  user_profiles.hasMany(matches, { as: "matches", foreignKey: "user_profiles"});
  user_languages.belongsTo(user_profiles, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profiles.hasMany(user_languages, { as: "user_languages", foreignKey: "user_profile_id"});
  user_profile_skills.belongsTo(user_profiles, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profiles.hasMany(user_profile_skills, { as: "user_profile_skills", foreignKey: "user_profile_id"});
  user_profile_soft_skills.belongsTo(user_profiles, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profiles.hasMany(user_profile_soft_skills, { as: "user_profile_soft_skills", foreignKey: "user_profile_id"});
  visas_has_user_profiles.belongsTo(user_profiles, { as: "user_profile", foreignKey: "user_profiles_id"});
  user_profiles.hasMany(visas_has_user_profiles, { as: "visas_has_user_profiles", foreignKey: "user_profiles_id"});
  user_profiles.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_profiles, { as: "user_profiles", foreignKey: "user_id"});
  visas_has_user_profiles.belongsTo(visas, { as: "visa", foreignKey: "visas_id"});
  visas.hasMany(visas_has_user_profiles, { as: "visas_has_user_profiles", foreignKey: "visas_id"});
  user_profiles.belongsTo(work_modes, { as: "work_mode_work_mode", foreignKey: "work_mode"});
  work_modes.hasMany(user_profiles, { as: "user_profiles", foreignKey: "work_mode"});

  return {
    alternatives,
    availabilities,
    certificates,
    cities,
    companies,
    countries,
    desired_positions,
    educations,
    employment_statuses,
    languages,
    levels,
    matches,
    quiestions,
    roles,
    skills,
    soft_skills,
    states,
    status,
    tests,
    type_skills,
    user_languages,
    user_profile_skills,
    user_profile_soft_skills,
    user_profiles,
    users,
    visas,
    visas_has_user_profiles,
    work_modes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
