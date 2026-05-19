package com.loopcart.app.models.DTO;

import com.loopcart.app.models.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

    @NotBlank
    private String fullName;

    @Email
    @NotBlank
    private String email;

    private String phone;

    @NotBlank
    private String password;

    @NotNull
    private User.Role role = User.Role.CUSTOMER;
}
