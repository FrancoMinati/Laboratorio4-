package com.franco.laboratoriotp5.mapper;

import com.franco.laboratoriotp5.dto.InstrumentoDTO;
import com.franco.laboratoriotp5.entity.Instrumento;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-20T18:09:53-0300",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.7 (Oracle Corporation)"
)
@Component
public class InstrumentoMapperImpl implements InstrumentoMapper {

    @Override
    public InstrumentoDTO toInstrumentoDTO(Instrumento source) {
        if ( source == null ) {
            return null;
        }

        InstrumentoDTO instrumentoDTO = new InstrumentoDTO();

        instrumentoDTO.setId( source.getId() );
        instrumentoDTO.setInstrumento( source.getInstrumento() );
        instrumentoDTO.setMarca( source.getMarca() );
        instrumentoDTO.setModelo( source.getModelo() );
        instrumentoDTO.setImagen( source.getImagen() );
        instrumentoDTO.setPrecio( source.getPrecio() );
        instrumentoDTO.setCostoEnvio( source.getCostoEnvio() );
        instrumentoDTO.setCantidadVendida( source.getCantidadVendida() );
        instrumentoDTO.setDescripcion( source.getDescripcion() );

        return instrumentoDTO;
    }

    @Override
    public Instrumento toEntity(InstrumentoDTO source) {
        if ( source == null ) {
            return null;
        }

        Instrumento instrumento = new Instrumento();

        instrumento.setId( source.getId() );
        instrumento.setInstrumento( source.getInstrumento() );
        instrumento.setMarca( source.getMarca() );
        instrumento.setModelo( source.getModelo() );
        instrumento.setImagen( source.getImagen() );
        instrumento.setPrecio( source.getPrecio() );
        instrumento.setCostoEnvio( source.getCostoEnvio() );
        instrumento.setCantidadVendida( source.getCantidadVendida() );
        instrumento.setDescripcion( source.getDescripcion() );

        return instrumento;
    }

    @Override
    public List<InstrumentoDTO> toInstrumentoDTOList(List<Instrumento> source) {
        if ( source == null ) {
            return null;
        }

        List<InstrumentoDTO> list = new ArrayList<InstrumentoDTO>( source.size() );
        for ( Instrumento instrumento : source ) {
            list.add( toInstrumentoDTO( instrumento ) );
        }

        return list;
    }

    @Override
    public List<Instrumento> toInstrumentoList(List<InstrumentoDTO> source) {
        if ( source == null ) {
            return null;
        }

        List<Instrumento> list = new ArrayList<Instrumento>( source.size() );
        for ( InstrumentoDTO instrumentoDTO : source ) {
            list.add( toEntity( instrumentoDTO ) );
        }

        return list;
    }
}
