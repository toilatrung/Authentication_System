import * as authService from "#services/auth.service"

export const register = async (req, res) => {
	const user = await authService.registerUser(req.body);
	
	res.status(201).json({
		sucess: true,
		data:user
	});
};

export const login = async (req, res) => {
	const user = await authService.loginUser(req.body);
	
	res.status(200).json({
		success: true,
		data: user
	});
};