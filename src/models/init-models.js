import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _answers from  "./answers.js";
import _aviabilities from  "./aviabilities.js";
import _cities from  "./cities.js";
import _companies from  "./companies.js";
import _companies_desired_roles from  "./companies_desired_roles.js";
import _countries from  "./countries.js";
import _educations from  "./educations.js";
import _employment_statuses from  "./employment_statuses.js";
import _english from  "./english.js";
import _insitutions from  "./insitutions.js";
import _level from  "./level.js";
import _matches from  "./matches.js";
import _questions from  "./questions.js";
import _questions_has_answers from  "./questions_has_answers.js";
import _roles from  "./roles.js";
import _skills from  "./skills.js";
import _soft_skills from  "./soft_skills.js";
import _states from  "./states.js";
import _statuses from  "./statuses.js";
import _tests from  "./tests.js";
import _tests_has_questions from  "./tests_has_questions.js";
import _type_skills from  "./type_skills.js";
import _user from  "./user.js";
import _user_profile from  "./user_profile.js";
import _user_profile_desired_roles from  "./user_profile_desired_roles.js";
import _user_profile_has_educations from  "./user_profile_has_educations.js";
import _user_profile_has_skills from  "./user_profile_has_skills.js";
import _user_profile_has_soft_skills from  "./user_profile_has_soft_skills.js";
import _user_profile_has_tests from  "./user_profile_has_tests.js";
import _user_profile_has_visas from  "./user_profile_has_visas.js";
import _visas from  "./visas.js";
import _work_mode from  "./work_mode.js";

export default function initModels(sequelize) {
  const answers = _answers.init(sequelize, DataTypes);
  const aviabilities = _aviabilities.init(sequelize, DataTypes);
  const cities = _cities.init(sequelize, DataTypes);
  const companies = _companies.init(sequelize, DataTypes);
  const companies_desired_roles = _companies_desired_roles.init(sequelize, DataTypes);
  const countries = _countries.init(sequelize, DataTypes);
  const educations = _educations.init(sequelize, DataTypes);
  const employment_statuses = _employment_statuses.init(sequelize, DataTypes);
  const english = _english.init(sequelize, DataTypes);
  const insitutions = _insitutions.init(sequelize, DataTypes);
  const level = _level.init(sequelize, DataTypes);
  const matches = _matches.init(sequelize, DataTypes);
  const questions = _questions.init(sequelize, DataTypes);
  const questions_has_answers = _questions_has_answers.init(sequelize, DataTypes);
  const roles = _roles.init(sequelize, DataTypes);
  const skills = _skills.init(sequelize, DataTypes);
  const soft_skills = _soft_skills.init(sequelize, DataTypes);
  const states = _states.init(sequelize, DataTypes);
  const statuses = _statuses.init(sequelize, DataTypes);
  const tests = _tests.init(sequelize, DataTypes);
  const tests_has_questions = _tests_has_questions.init(sequelize, DataTypes);
  const type_skills = _type_skills.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);
  const user_profile = _user_profile.init(sequelize, DataTypes);
  const user_profile_desired_roles = _user_profile_desired_roles.init(sequelize, DataTypes);
  const user_profile_has_educations = _user_profile_has_educations.init(sequelize, DataTypes);
  const user_profile_has_skills = _user_profile_has_skills.init(sequelize, DataTypes);
  const user_profile_has_soft_skills = _user_profile_has_soft_skills.init(sequelize, DataTypes);
  const user_profile_has_tests = _user_profile_has_tests.init(sequelize, DataTypes);
  const user_profile_has_visas = _user_profile_has_visas.init(sequelize, DataTypes);
  const visas = _visas.init(sequelize, DataTypes);
  const work_mode = _work_mode.init(sequelize, DataTypes);

  answers.belongsToMany(questions, { as: 'questions_id_questions', through: questions_has_answers, foreignKey: "answers_id", otherKey: "questions_id" });
  companies.belongsToMany(roles, { as: 'roles_id_roles', through: companies_desired_roles, foreignKey: "companies_id", otherKey: "roles_id" });
  educations.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_educations', through: user_profile_has_educations, foreignKey: "educations_id", otherKey: "user_profile_id" });
  questions.belongsToMany(answers, { as: 'answers_id_answers', through: questions_has_answers, foreignKey: "questions_id", otherKey: "answers_id" });
  questions.belongsToMany(tests, { as: 'tests_id_tests', through: tests_has_questions, foreignKey: "questions_id", otherKey: "tests_id" });
  roles.belongsToMany(companies, { as: 'companies_id_companies', through: companies_desired_roles, foreignKey: "roles_id", otherKey: "companies_id" });
  roles.belongsToMany(user_profile, { as: 'user_profile_id_user_profiles', through: user_profile_desired_roles, foreignKey: "roles_id", otherKey: "user_profile_id" });
  skills.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_skills', through: user_profile_has_skills, foreignKey: "skills_id", otherKey: "user_profile_id" });
  soft_skills.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_soft_skills', through: user_profile_has_soft_skills, foreignKey: "soft_skills_id", otherKey: "user_profile_id" });
  tests.belongsToMany(questions, { as: 'questions_id_questions_tests_has_questions', through: tests_has_questions, foreignKey: "tests_id", otherKey: "questions_id" });
  tests.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_tests', through: user_profile_has_tests, foreignKey: "tests_id", otherKey: "user_profile_id" });
  user_profile.belongsToMany(educations, { as: 'educations_id_educations', through: user_profile_has_educations, foreignKey: "user_profile_id", otherKey: "educations_id" });
  user_profile.belongsToMany(roles, { as: 'roles_id_roles_user_profile_desired_roles', through: user_profile_desired_roles, foreignKey: "user_profile_id", otherKey: "roles_id" });
  user_profile.belongsToMany(skills, { as: 'skills_id_skills', through: user_profile_has_skills, foreignKey: "user_profile_id", otherKey: "skills_id" });
  user_profile.belongsToMany(soft_skills, { as: 'soft_skills_id_soft_skills', through: user_profile_has_soft_skills, foreignKey: "user_profile_id", otherKey: "soft_skills_id" });
  user_profile.belongsToMany(tests, { as: 'tests_id_tests_user_profile_has_tests', through: user_profile_has_tests, foreignKey: "user_profile_id", otherKey: "tests_id" });
  user_profile.belongsToMany(visas, { as: 'visas_id_visas', through: user_profile_has_visas, foreignKey: "user_profile_id", otherKey: "visas_id" });
  visas.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_visas', through: user_profile_has_visas, foreignKey: "visas_id", otherKey: "user_profile_id" });
  questions_has_answers.belongsTo(answers, { as: "answer", foreignKey: "answers_id"});
  answers.hasMany(questions_has_answers, { as: "questions_has_answers", foreignKey: "answers_id"});
  user_profile.belongsTo(aviabilities, { as: "aviability", foreignKey: "aviabilities_id"});
  aviabilities.hasMany(user_profile, { as: "user_profiles", foreignKey: "aviabilities_id"});
  user_profile.belongsTo(cities, { as: "city", foreignKey: "cities_id"});
  cities.hasMany(user_profile, { as: "user_profiles", foreignKey: "cities_id"});
  companies_desired_roles.belongsTo(companies, { as: "company", foreignKey: "companies_id"});
  companies.hasMany(companies_desired_roles, { as: "companies_desired_roles", foreignKey: "companies_id"});
  matches.belongsTo(companies_desired_roles, { as: "companies_desired_roles_company", foreignKey: "companies_desired_roles_companies_id"});
  companies_desired_roles.hasMany(matches, { as: "matches", foreignKey: "companies_desired_roles_companies_id"});
  matches.belongsTo(companies_desired_roles, { as: "companies_desired_roles_role", foreignKey: "companies_desired_roles_roles_id"});
  companies_desired_roles.hasMany(matches, { as: "companies_desired_roles_roles_matches", foreignKey: "companies_desired_roles_roles_id"});
  states.belongsTo(countries, { as: "country", foreignKey: "countries_id"});
  countries.hasMany(states, { as: "states", foreignKey: "countries_id"});
  user_profile_has_educations.belongsTo(educations, { as: "education", foreignKey: "educations_id"});
  educations.hasMany(user_profile_has_educations, { as: "user_profile_has_educations", foreignKey: "educations_id"});
  user_profile.belongsTo(employment_statuses, { as: "employment_status", foreignKey: "employment_statuses_id"});
  employment_statuses.hasMany(user_profile, { as: "user_profiles", foreignKey: "employment_statuses_id"});
  user_profile.belongsTo(english, { as: "english", foreignKey: "english_id"});
  english.hasMany(user_profile, { as: "user_profiles", foreignKey: "english_id"});
  educations.belongsTo(insitutions, { as: "insitution", foreignKey: "insitutions_id"});
  insitutions.hasMany(educations, { as: "educations", foreignKey: "insitutions_id"});
  skills.belongsTo(level, { as: "level", foreignKey: "level_id"});
  level.hasMany(skills, { as: "skills", foreignKey: "level_id"});
  questions_has_answers.belongsTo(questions, { as: "question", foreignKey: "questions_id"});
  questions.hasMany(questions_has_answers, { as: "questions_has_answers", foreignKey: "questions_id"});
  tests_has_questions.belongsTo(questions, { as: "question", foreignKey: "questions_id"});
  questions.hasMany(tests_has_questions, { as: "tests_has_questions", foreignKey: "questions_id"});
  companies_desired_roles.belongsTo(roles, { as: "role", foreignKey: "roles_id"});
  roles.hasMany(companies_desired_roles, { as: "companies_desired_roles", foreignKey: "roles_id"});
  user.belongsTo(roles, { as: "role", foreignKey: "roles_id"});
  roles.hasMany(user, { as: "users", foreignKey: "roles_id"});
  user_profile_desired_roles.belongsTo(roles, { as: "role", foreignKey: "roles_id"});
  roles.hasMany(user_profile_desired_roles, { as: "user_profile_desired_roles", foreignKey: "roles_id"});
  user_profile_has_skills.belongsTo(skills, { as: "skill", foreignKey: "skills_id"});
  skills.hasMany(user_profile_has_skills, { as: "user_profile_has_skills", foreignKey: "skills_id"});
  user_profile_has_tests.belongsTo(skills, { as: "skill", foreignKey: "skills_id"});
  skills.hasMany(user_profile_has_tests, { as: "user_profile_has_tests", foreignKey: "skills_id"});
  user_profile_has_soft_skills.belongsTo(soft_skills, { as: "soft_skill", foreignKey: "soft_skills_id"});
  soft_skills.hasMany(user_profile_has_soft_skills, { as: "user_profile_has_soft_skills", foreignKey: "soft_skills_id"});
  cities.belongsTo(states, { as: "state", foreignKey: "states_id"});
  states.hasMany(cities, { as: "cities", foreignKey: "states_id"});
  user.belongsTo(statuses, { as: "status", foreignKey: "statuses_id"});
  statuses.hasMany(user, { as: "users", foreignKey: "statuses_id"});
  tests_has_questions.belongsTo(tests, { as: "test", foreignKey: "tests_id"});
  tests.hasMany(tests_has_questions, { as: "tests_has_questions", foreignKey: "tests_id"});
  user_profile_has_tests.belongsTo(tests, { as: "test", foreignKey: "tests_id"});
  tests.hasMany(user_profile_has_tests, { as: "user_profile_has_tests", foreignKey: "tests_id"});
  skills.belongsTo(type_skills, { as: "type_skill", foreignKey: "type_skills_id"});
  type_skills.hasMany(skills, { as: "skills", foreignKey: "type_skills_id"});
  user_profile.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_profile, { as: "user_profiles", foreignKey: "user_id"});
  user_profile_desired_roles.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_desired_roles, { as: "user_profile_desired_roles", foreignKey: "user_profile_id"});
  user_profile_has_educations.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_has_educations, { as: "user_profile_has_educations", foreignKey: "user_profile_id"});
  user_profile_has_skills.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_has_skills, { as: "user_profile_has_skills", foreignKey: "user_profile_id"});
  user_profile_has_soft_skills.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_has_soft_skills, { as: "user_profile_has_soft_skills", foreignKey: "user_profile_id"});
  user_profile_has_tests.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_has_tests, { as: "user_profile_has_tests", foreignKey: "user_profile_id"});
  user_profile_has_visas.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_has_visas, { as: "user_profile_has_visas", foreignKey: "user_profile_id"});
  matches.belongsTo(user_profile_desired_roles, { as: "user_profile_desired_roles_user_profile", foreignKey: "user_profile_desired_roles_user_profile_id"});
  user_profile_desired_roles.hasMany(matches, { as: "matches", foreignKey: "user_profile_desired_roles_user_profile_id"});
  matches.belongsTo(user_profile_desired_roles, { as: "user_profile_desired_roles_role", foreignKey: "user_profile_desired_roles_roles_id"});
  user_profile_desired_roles.hasMany(matches, { as: "user_profile_desired_roles_roles_matches", foreignKey: "user_profile_desired_roles_roles_id"});
  user_profile_has_visas.belongsTo(visas, { as: "visa", foreignKey: "visas_id"});
  visas.hasMany(user_profile_has_visas, { as: "user_profile_has_visas", foreignKey: "visas_id"});
  user_profile.belongsTo(work_mode, { as: "work_mode", foreignKey: "work_mode_id"});
  work_mode.hasMany(user_profile, { as: "user_profiles", foreignKey: "work_mode_id"});

  return {
    answers,
    aviabilities,
    cities,
    companies,
    companies_desired_roles,
    countries,
    educations,
    employment_statuses,
    english,
    insitutions,
    level,
    matches,
    questions,
    questions_has_answers,
    roles,
    skills,
    soft_skills,
    states,
    statuses,
    tests,
    tests_has_questions,
    type_skills,
    user,
    user_profile,
    user_profile_desired_roles,
    user_profile_has_educations,
    user_profile_has_skills,
    user_profile_has_soft_skills,
    user_profile_has_tests,
    user_profile_has_visas,
    visas,
    work_mode,
  };
}
