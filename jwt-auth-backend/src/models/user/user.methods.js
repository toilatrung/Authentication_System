import bcrypt from "bcrypt";

export const  userMethods = (schema) => {
	schema.methods.comparePassword = async function(candidatePassword) {
		return bcrypt.compare(candidatePassword, this.password);
	};
};