package com.franco.laboratoriotp5.mapper;

import com.franco.laboratoriotp5.dto.InstrumentoDTO;
import com.franco.laboratoriotp5.entity.Instrumento;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface InstrumentoMapper {
    static InstrumentoMapper getInstance() {
        return Mappers.getMapper(InstrumentoMapper.class);
    }

    @Mapping(source = "id", target = "id")
    InstrumentoDTO toInstrumentoDTO(Instrumento source);

    @Mapping(source = "id", target = "id")
    Instrumento  toEntity(InstrumentoDTO source);

    List<InstrumentoDTO> toInstrumentoDTOList(List<Instrumento> source);

    List<Instrumento> toInstrumentoList(List<InstrumentoDTO> source);
}
