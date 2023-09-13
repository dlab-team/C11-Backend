import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _aviabilities from  "./aviabilities.js";
import _companies from  "./companies.js";
import _companies_desired_roles from  "./companies_desired_roles.js";
import _educations from  "./educations.js";
import _employment_statuses from  "./employment_statuses.js";
import _insitutions from  "./insitutions.js";
import _level from  "./level.js";
import _matches from  "./matches.js";
import _roles from  "./roles.js";
import _skills from  "./skills.js";
import _soft_skills from  "./soft_skills.js";
import _statuses from  "./statuses.js";
import _type_skills from  "./type_skills.js";
import _user from  "./user.js";
import _user_profile from  "./user_profile.js";
import _user_profile_desired_roles from  "./user_profile_desired_roles.js";
import _user_profile_has_aviabilities from  "./user_profile_has_aviabilities.js";
import _user_profile_has_educations from  "./user_profile_has_educations.js";
import _user_profile_has_skills from  "./user_profile_has_skills.js";
import _user_profile_has_soft_skills from  "./user_profile_has_soft_skills.js";
import _user_profile_has_visas from  "./user_profile_has_visas.js";
import _visas from  "./visas.js";
import _work_mode from  "./work_mode.js";

export default function initModels(sequelize) {
  const aviabilities = _aviabilities.init(sequelize, DataTypes);
  const companies = _companies.init(sequelize, DataTypes);
  const companies_desired_roles = _companies_desired_roles.init(sequelize, DataTypes);
  const educations = _educations.init(sequelize, DataTypes);
  const employment_statuses = _employment_statuses.init(sequelize, DataTypes);
  const insitutions = _insitutions.init(sequelize, DataTypes);
  const level = _level.init(sequelize, DataTypes);
  const matches = _matches.init(sequelize, DataTypes);
  const roles = _roles.init(sequelize, DataTypes);
  const skills = _skills.init(sequelize, DataTypes);
  const soft_skills = _soft_skills.init(sequelize, DataTypes);
  const statuses = _statuses.init(sequelize, DataTypes);
  const type_skills = _type_skills.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);
  const user_profile = _user_profile.init(sequelize, DataTypes);
  const user_profile_desired_roles = _user_profile_desired_roles.init(sequelize, DataTypes);
  const user_profile_has_aviabilities = _user_profile_has_aviabilities.init(sequelize, DataTypes);
  const user_profile_has_educations = _user_profile_has_educations.init(sequelize, DataTypes);
  const user_profile_has_skills = _user_profile_has_skills.init(sequelize, DataTypes);
  const user_profile_has_soft_skills = _user_profile_has_soft_skills.init(sequelize, DataTypes);
  const user_profile_has_visas = _user_profile_has_visas.init(sequelize, DataTypes);
  const visas = _visas.init(sequelize, DataTypes);
  const work_mode = _work_mode.init(sequelize, DataTypes);

  aviabilities.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_aviabilities', through: user_profile_has_aviabilities, foreignKey: "aviabilities_id", otherKey: "user_profile_id" });
  companies.belongsToMany(roles, { as: 'roles_id_roles', through: companies_desired_roles, foreignKey: "companies_id", otherKey: "roles_id" });
  educations.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_educations', through: user_profile_has_educations, foreignKey: "educations_id", otherKey: "user_profile_id" });
  roles.belongsToMany(companies, { as: 'companies_id_companies', through: companies_desired_roles, foreignKey: "roles_id", otherKey: "companies_id" });
  roles.belongsToMany(user_profile, { as: 'user_profile_id_user_profiles', through: user_profile_desired_roles, foreignKey: "roles_id", otherKey: "user_profile_id" });
  skills.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_skills', through: user_profile_has_skills, foreignKey: "skills_id", otherKey: "user_profile_id" });
  soft_skills.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_soft_skills', through: user_profile_has_soft_skills, foreignKey: "soft_skills_id", otherKey: "user_profile_id" });
  user_profile.belongsToMany(aviabilities, { as: 'aviabilities_id_aviabilities', through: user_profile_has_aviabilities, foreignKey: "user_profile_id", otherKey: "aviabilities_id" });
  user_profile.belongsToMany(educations, { as: 'educations_id_educations', through: user_profile_has_educations, foreignKey: "user_profile_id", otherKey: "educations_id" });
  user_profile.belongsToMany(roles, { as: 'roles_id_roles_user_profile_desired_roles', through: user_profile_desired_roles, foreignKey: "user_profile_id", otherKey: "roles_id" });
  user_profile.belongsToMany(skills, { as: 'skills_id_skills', through: user_profile_has_skills, foreignKey: "user_profile_id", otherKey: "skills_id" });
  user_profile.belongsToMany(soft_skills, { as: 'soft_skills_id_soft_skills', through: user_profile_has_soft_skills, foreignKey: "user_profile_id", otherKey: "soft_skills_id" });
  user_profile.belongsToMany(visas, { as: 'visas_id_visas', through: user_profile_has_visas, foreignKey: "user_profile_id", otherKey: "visas_id" });
  visas.belongsToMany(user_profile, { as: 'user_profile_id_user_profile_user_profile_has_visas', through: user_profile_has_visas, foreignKey: "visas_id", otherKey: "user_profile_id" });
  user_profile_has_aviabilities.belongsTo(aviabilities, { as: "aviability", foreignKey: "aviabilities_id"});
  aviabilities.hasMany(user_profile_has_aviabilities, { as: "user_profile_has_aviabilities", foreignKey: "aviabilities_id"});
  companies_desired_roles.belongsTo(companies, { as: "company", foreignKey: "companies_id"});
  companies.hasMany(companies_desired_roles, { as: "companies_desired_roles", foreignKey: "companies_id"});
  matches.belongsTo(companies_desired_roles, { as: "companies_desired_roles_company", foreignKey: "companies_desired_roles_companies_id"});
  companies_desired_roles.hasMany(matches, { as: "matches", foreignKey: "companies_desired_roles_companies_id"});
  matches.belongsTo(companies_desired_roles, { as: "companies_desired_roles_role", foreignKey: "companies_desired_roles_roles_id"});
  companies_desired_roles.hasMany(matches, { as: "companies_desired_roles_roles_matches", foreignKey: "companies_desired_roles_roles_id"});
  user_profile_has_educations.belongsTo(educations, { as: "education", foreignKey: "educations_id"});
  educations.hasMany(user_profile_has_educations, { as: "user_profile_has_educations", foreignKey: "educations_id"});
  user_profile.belongsTo(employment_statuses, { as: "employment_status", foreignKey: "employment_statuses_id"});
  employment_statuses.hasMany(user_profile, { as: "user_profiles", foreignKey: "employment_statuses_id"});
  educations.belongsTo(insitutions, { as: "insitution", foreignKey: "insitutions_id"});
  insitutions.hasMany(educations, { as: "educations", foreignKey: "insitutions_id"});
  user_profile_has_skills.belongsTo(level, { as: "level", foreignKey: "level_id"});
  level.hasMany(user_profile_has_skills, { as: "user_profile_has_skills", foreignKey: "level_id"});
  companies_desired_roles.belongsTo(roles, { as: "role", foreignKey: "roles_id"});
  roles.hasMany(companies_desired_roles, { as: "companies_desired_roles", foreignKey: "roles_id"});
  user.belongsTo(roles, { as: "role", foreignKey: "roles_id"});
  roles.hasMany(user, { as: "users", foreignKey: "roles_id"});
  user_profile_desired_roles.belongsTo(roles, { as: "role", foreignKey: "roles_id"});
  roles.hasMany(user_profile_desired_roles, { as: "user_profile_desired_roles", foreignKey: "roles_id"});
  user_profile_has_skills.belongsTo(skills, { as: "skill", foreignKey: "skills_id"});
  skills.hasMany(user_profile_has_skills, { as: "user_profile_has_skills", foreignKey: "skills_id"});
  user_profile_has_soft_skills.belongsTo(soft_skills, { as: "soft_skill", foreignKey: "soft_skills_id"});
  soft_skills.hasMany(user_profile_has_soft_skills, { as: "user_profile_has_soft_skills", foreignKey: "soft_skills_id"});
  user.belongsTo(statuses, { as: "status", foreignKey: "statuses_id"});
  statuses.hasMany(user, { as: "users", foreignKey: "statuses_id"});
  skills.belongsTo(type_skills, { as: "type_skill", foreignKey: "type_skills_id"});
  type_skills.hasMany(skills, { as: "skills", foreignKey: "type_skills_id"});
  user_profile.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_profile, { as: "user_profiles", foreignKey: "user_id"});
  user_profile_desired_roles.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_desired_roles, { as: "user_profile_desired_roles", foreignKey: "user_profile_id"});
  user_profile_has_aviabilities.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_has_aviabilities, { as: "user_profile_has_aviabilities", foreignKey: "user_profile_id"});
  user_profile_has_educations.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_has_educations, { as: "user_profile_has_educations", foreignKey: "user_profile_id"});
  user_profile_has_skills.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_has_skills, { as: "user_profile_has_skills", foreignKey: "user_profile_id"});
  user_profile_has_soft_skills.belongsTo(user_profile, { as: "user_profile", foreignKey: "user_profile_id"});
  user_profile.hasMany(user_profile_has_soft_skills, { as: "user_profile_has_soft_skills", foreignKey: "user_profile_id"});
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
    aviabilities,
    companies,
    companies_desired_roles,
    educations,
    employment_statuses,
    insitutions,
    level,
    matches,
    roles,
    skills,
    soft_skills,
    statuses,
    type_skills,
    user,
    user_profile,
    user_profile_desired_roles,
    user_profile_has_aviabilities,
    user_profile_has_educations,
    user_profile_has_skills,
    user_profile_has_soft_skills,
    user_profile_has_visas,
    visas,
    work_mode,
  };
}
