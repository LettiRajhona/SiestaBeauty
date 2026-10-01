package com.siestabeauty.backend;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.stereotype.Service;

import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

@Service
public class BookingService {

    private final List<Booking> bookings;

    public BookingService(ObjectMapper objectMapper) throws IOException {
        try (InputStream input = getClass().getResourceAsStream("/bookings.json")) {
            bookings = objectMapper.readValue(input, new TypeReference<List<Booking>>() {
            });
        }
    }

    public List<PublicBooking> getPublicBookings() {
        return bookings.stream()
                .map(booking -> new PublicBooking(booking.date(), booking.hour()))
                .toList();
    }
}
