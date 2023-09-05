import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";
import dotenv from "dotenv";
import admin from "firebase-admin";

const models = initModels(sequelize);
dotenv.config();

const userProfileController = {
  // CREACION DE PERFIL USUARIO
  createUserProfile: async (req, res) => {
    try {
      const {
        name,
        last_name,
        email,
        roles,
        visas,
        carrerNames,
        institutionNames,
        institutionIds,
        skills,
        levels,
        softSkills,
        aviabilities,
        country_id,
        state_id,
        city_id,
        ...userProfileData
      } = req.body;

      for (const prop in userProfileData) {
        if (typeof userProfileData[prop] === "string") {
          userProfileData[prop] = userProfileData[prop]
            .trim()
            .replace(/\s{2,}/g, " ")
            .toLowerCase();
        }
      }
      const userEmail = req.user.email; // Obtiene el correo electrónico del usuario autenticado desde la solicitud
      console.log(
        "🚀 ~ file: userProfileController.js:40 ~ createUserProfile: ~ req.user:",
        req.user
      );
      const user = await models.user.findOne({ where: { email: userEmail } });

      const userFireBase = await admin.auth().updateUser(req.user.uid, {
        email: req.body.email,
      });
      console.log(
        "🚀 ~ file: userProfileController.js:49 ~ userFireBase ~ userFireBase:",
        userFireBase
      );

      user.email = req.body.email;
      user.save();

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Verifica si ya existe un perfil de usuario para este usuario
      const existingUserProfile = await models.user_profile.findOne({
        where: { user_id: user.id },
      });

      if (existingUserProfile) {
        return res
          .status(400)
          .json({ message: "El perfil de usuario ya existe" });
      }

      const allRoles = await models.roles.findAll();

      if (roles.length === 0) {
        return res.status(400).json({
          error: "invalid roles",
          msg: "Debe seleccionar al menos un cargo",
        });
      }

      const invalidRoles = roles.filter(
        (roleId) => !allRoles.some((role) => role.id === roleId)
      );

      if (invalidRoles.length > 0) {
        return res.status(400).json({
          error: "invalid roles",
          msg: "Cargos inválidos proporcionados.",
        });
      }

      // Validar visas
      const allVisas = await models.visas.findAll();

      if (visas.length === 0) {
        return res.status(400).json({
          error: "invalid visas",
          msg: "Debe seleccionar al menos una visa",
        });
      }

      const invalidVisas = visas.filter(
        (visaId) => !allVisas.some((visa) => visa.id === visaId)
      );

      if (invalidVisas.length > 0) {
        return res.status(400).json({
          error: "invalid visas",
          msg: "Visas inválidas proporcionadas.",
        });
      }

      // Validar levels
      const allLevels = await models.level.findAll();

      if (levels.length === 0) {
        return res.status(400).json({
          error: "invalid levels",
          msg: "Debe seleccionar al menos un nivel",
        });
      }

      const invalidLevels = levels.filter(
        (levelId) => !allLevels.some((level) => level.id === levelId)
      );

      if (invalidLevels.length > 0) {
        return res.status(400).json({
          error: "invalid levels",
          msg: "Niveles inválidos proporcionados.",
        });
      }

      // Validar institutionIds
      const allInstitutions = await models.insitutions.findAll();

      if (institutionIds.length === 0) {
        return res.status(400).json({
          error: "invalid institutionIds",
          msg: "Debe seleccionar al menos una institución",
        });
      }

      const invalidInstitutionIds = institutionIds.filter(
        (institutionId) =>
          !allInstitutions.some(
            (institution) => institution.id === institutionId
          )
      );

      if (invalidInstitutionIds.length > 0) {
        return res.status(400).json({
          error: "invalid institutionIds",
          msg: "Instituciones inválidas proporcionadas.",
        });
      }

      // Validar skills
      const allSkills = await models.skills.findAll();

      if (skills.length === 0) {
        return res.status(400).json({
          error: "invalid skills",
          msg: "Debe seleccionar al menos una habilidad",
        });
      }

      const invalidSkills = skills.filter(
        (skillId) => !allSkills.some((skill) => skill.id === skillId)
      );

      if (invalidSkills.length > 0) {
        return res.status(400).json({
          error: "invalid skills",
          msg: "Habilidades inválidas proporcionadas.",
        });
      }

      // Validar aviabilities
      const allAviabilities = await models.aviabilities.findAll();

      if (aviabilities.length === 0) {
        return res.status(400).json({
          error: "invalid aviabilities",
          msg: "Debe seleccionar al menos una disponibilidad",
        });
      }

      const invalidAviabilities = aviabilities.filter(
        (aviabilityId) =>
          !allAviabilities.some((aviability) => aviability.id === aviabilityId)
      );

      if (invalidAviabilities.length > 0) {
        return res.status(400).json({
          error: "invalid aviabilities",
          msg: "Disponibilidades inválidas proporcionadas.",
        });
      }

      // Validar softSkills
      const allSoftSkills = await models.soft_skills.findAll();

      if (softSkills.length === 0) {
        return res.status(400).json({
          error: "invalid softSkills",
          msg: "Debe seleccionar al menos una habilidad interpersonal",
        });
      }

      const invalidSoftSkills = softSkills.filter(
        (softSkillId) =>
          !allSoftSkills.some((softSkill) => softSkill.id === softSkillId)
      );

      if (invalidSoftSkills.length > 0) {
        return res.status(400).json({
          error: "invalid softSkills",
          msg: "Habilidades interpersonales inválidas proporcionadas.",
        });
      }

      // Validar la ciudad PENDIENTE

      // Obtén los datos del perfil de usuario desde el cuerpo de la solicitud

      // Crea el perfil de usuario en la base de datos
      const userProfile = await models.user_profile.create({
        gender: userProfileData.gender,
        url_curriculum_vitae: userProfileData.url_curriculum_vitae,
        url_repository: userProfileData.url_repository,
        url_portfolio: userProfileData.url_portfolio,
        url_linkedin: userProfileData.url_linkedin,
        phone: userProfileData.phone,
        years_of_experience: userProfileData.years_of_experience,
        proud_experience: userProfileData.proud_experience,
        relocation: userProfileData.relocation,
        salary_expectations: userProfileData.salary_expectations,
        user_id: userProfileData.user_id,
        work_mode_id: userProfileData.work_mode_id,
        employment_statuses_id: userProfileData.employment_statuses_id,
        english_id: userProfileData.english_id,
        cities_id: userProfileData.cities_id,
        file_curriculum_vitae: userProfileData.file_curriculum_vitae,
        max_education_level: userProfileData.max_education_level,
        current_education_level: userProfileData.current_education_level,
        dream_job: userProfileData.dream_job,
        user_id: user.id, // Establece el ID de usuario relacionado
      });

      const userProfileId = userProfile.id;

      //agregar tablas intermedias

      //Education create
      const educationRecords = [];
      for (let i = 0; i < carrerNames.length; i++) {
        const carrerName = carrerNames[i];
        const institutionName = institutionNames[i];
        const institutionId = institutionIds[i];

        const educationRecord = await models.educations.create({
          carrer: carrerName,
          institution_name: institutionName,
          insitutions_id: institutionId,
        });

        educationRecords.push(educationRecord);
      }

      //educations
      const userEducations = educationRecords.map((educationRecord) => ({
        user_profile_id: userProfileId,
        educations_id: educationRecord.id, // Asegúrate de que coincida con el nombre correcto del campo de ID en educations
      }));

      if (userEducations.length > 0) {
        await models.user_profile_has_educations.bulkCreate(userEducations);
      }

      //roles
      const validRoles = roles.filter((roleId) =>
        allRoles.some((role) => role.id === roleId)
      );

      if (validRoles.length > 0) {
        const userProfileDesiredRoles = validRoles.map((roleId) => ({
          user_profile_id: userProfileId,
          roles_id: roleId,
        }));

        await models.user_profile_desired_roles.bulkCreate(
          userProfileDesiredRoles
        );
      }

      //skills
      const validSkills = skills.filter((skillId) =>
        allSkills.some((skill) => skill.id === skillId)
      );

      if (validSkills.length > 0) {
        const userProfileDesiredSkills = skills.map((skillId, index) => ({
          user_profile_id: userProfileId,
          skills_id: skillId,
          level_id: levels[index], // Asigna el level correspondiente al índice
        }));

        await models.user_profile_has_skills.bulkCreate(
          userProfileDesiredSkills
        );
      }

      //visas
      const validVisas = visas.filter((visaId) =>
        allVisas.some((visa) => visa.id === visaId)
      );

      if (validVisas.length > 0) {
        const userProfileDesiredVisas = validVisas.map((visaId) => ({
          user_profile_id: userProfileId,
          visas_id: visaId,
        }));

        await models.user_profile_has_visas.bulkCreate(userProfileDesiredVisas);
      }

      // Aviabilities
      const validAviabilities = aviabilities.filter((aviabilityId) =>
        allAviabilities.some((aviability) => aviability.id === aviabilityId)
      );

      if (validAviabilities.length > 0) {
        const userProfileAviabilities = validAviabilities.map(
          (aviabilityId) => ({
            user_profile_id: userProfileId,
            aviabilities_id: aviabilityId,
          })
        );

        await models.user_profile_has_aviabilities.bulkCreate(
          userProfileAviabilities
        );
      }

      // Soft Skills
      const validSoftSkills = softSkills.filter((softSkillId) =>
        allSoftSkills.some((softSkill) => softSkill.id === softSkillId)
      );

      if (validSoftSkills.length > 0) {
        const userProfileSoftSkills = validSoftSkills.map((softSkillId) => ({
          user_profile_id: userProfileId,
          soft_skills_id: softSkillId,
        }));

        await models.user_profile_has_soft_skills.bulkCreate(
          userProfileSoftSkills
        );
      }

      // Devuelve el perfil de usuario recién creado como respuesta
      res.status(201).json({ userProfile });
    } catch (error) {
      console.error("Error al crear el perfil de usuario:", error);
      res
        .status(500)
        .json({ error: "Error al crear el perfil de usuario", error });
    }
  },

  getUserProfile: async (req, res) => {
    try {
      const userEmail = req.user.email; // Obtiene el correo electrónico del usuario autenticado desde la solicitud
      const user = await models.user.findOne({ where: { email: userEmail } });

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Verifica si ya existe un perfil de usuario para este usuario
      const existingUserProfile = await models.user_profile.findOne({
        where: { user_id: user.id },
        include: [
          {
            model: models.aviabilities,
            as: "aviabilities_id_aviabilities",
          },
          {
            model: models.educations,
            as: "educations_id_educations",
          },
          {
            model: models.roles,
            as: "roles_id_roles_user_profile_desired_roles",
          },
          {
            model: models.skills,
            as: "skills_id_skills",
          },
          {
            model: models.soft_skills,
            as: "soft_skills_id_soft_skills",
          },
          {
            model: models.visas,
            as: "visas_id_visas",
          },
          {
            model: models.user,
            as: "user",
          },
          {
            model: models.work_mode,
            as: "work_mode",
          },
        ],
      });

      if (!existingUserProfile) {
        return res
          .status(400)
          .json({ message: "El perfil de usuario no existe" });
      }

      // Devuelve el perfil de usuario recién creado como respuesta
      res.status(201).json({ existingUserProfile });
    } catch (error) {
      console.error("Error al obtener el perfil de usuario:", error);
      res
        .status(500)
        .json({ error: "Error al obtener el perfil de usuario", error });
    }
  },
};
export default userProfileController;
