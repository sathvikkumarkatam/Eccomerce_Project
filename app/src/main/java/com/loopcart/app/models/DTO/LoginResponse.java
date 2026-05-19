package com.loopcart.app.models.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponse
{
    private String token;
    private String role;
    private String email;
}
