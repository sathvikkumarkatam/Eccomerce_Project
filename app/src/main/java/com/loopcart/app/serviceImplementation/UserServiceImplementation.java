package com.loopcart.app.serviceImplementation;

import com.loopcart.app.models.DTO.LoginRequest;
import com.loopcart.app.models.DTO.LoginResponse;
import com.loopcart.app.models.DTO.RegisterRequest;
import com.loopcart.app.models.User;
import com.loopcart.app.repositories.UserRepo;
import com.loopcart.app.services.UserService;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImplementation implements UserService
{
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImplementation(UserRepo userRepo, PasswordEncoder passwordEncoder)
    {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User register(RegisterRequest request)
    {
        if (userRepo.findByEmail(request.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email is already registered");
        }

        User user = new User(
                request.getFullName(),
                request.getEmail(),
                request.getPhone(),
                passwordEncoder.encode(request.getPassword()),
                request.getRole()
        );

        return userRepo.save(user);
    }

    @Override
    public LoginResponse login(LoginRequest request)
    {
        User user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> new BadCredentialsException("Invalid email or password"));

        if (user.getPasswordHash() == null || !passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            throw new BadCredentialsException("Invalid email or password");
        }

        String temporaryToken = "login-success-" + user.getId();
        return new LoginResponse(temporaryToken, user.getRole().name(), user.getEmail());
    }
}
