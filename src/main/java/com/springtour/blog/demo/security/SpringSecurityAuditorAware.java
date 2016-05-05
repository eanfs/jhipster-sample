package com.springtour.blog.demo.security;

import com.springtour.blog.demo.config.Constants;

import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

/**
 * Implementation of AuditorAware based on Spring Security.
 */
@Component
public class SpringSecurityAuditorAware implements AuditorAware<String> {

    @Override
    public String getCurrentAuditor() {
        String userName = SecurityUtils.getCurrentUserLogin();
        return (userName != null ? userName : Constants.SYSTEM_ACCOUNT);
    }
}
