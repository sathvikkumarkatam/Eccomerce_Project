package com.loopcart.app.services;


import com.loopcart.app.models.DTO.LoginRequest;
import com.loopcart.app.models.DTO.LoginResponse;
import com.loopcart.app.models.DTO.RegisterRequest;
import com.loopcart.app.models.User;

public interface UserService
{
    User register(RegisterRequest request);
    LoginResponse login(LoginRequest request);
}
