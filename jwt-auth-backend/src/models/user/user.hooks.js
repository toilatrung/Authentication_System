import bcrypt from "bcrypt";

export const hashPasswordHook = (schema) => {
	
	schema.pre("save", async function() {
		if (!this.isModified("password")) {
			return;
		}
	
		try {
			const saltRounds = 10;
			this.password = await bcrypt.hash(this.password, saltRounds);
			return;
		} catch (error) {
			throw error;
		}
	});
};