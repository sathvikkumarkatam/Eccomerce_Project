package com.loopcart.app.controllers;

import com.loopcart.app.models.DTO.LoginRequest;
import com.loopcart.app.models.DTO.LoginResponse;
import com.loopcart.app.models.DTO.RegisterRequest;
import com.loopcart.app.models.User;
import com.loopcart.app.services.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController
{
    private final UserService userService;

    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/register")
    public User register(@Valid @RequestBody RegisterRequest request)
    {
        return userService.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest request)
    {
        return userService.login(request);
    }

}
