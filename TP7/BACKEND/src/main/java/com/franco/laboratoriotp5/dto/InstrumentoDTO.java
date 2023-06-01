package com.franco.laboratoriotp5.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class InstrumentoDTO {
    private Long id;
    private String instrumento;
    private String marca;
    private String modelo;
    private String imagen;
    private String precio;
    private String costoEnvio;
    private String cantidadVendida;
    private String descripcion;
}
