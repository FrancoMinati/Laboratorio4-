package com.franco.laboratoriotp5.service;

import com.franco.laboratoriotp5.dto.InstrumentoDTO;
import com.franco.laboratoriotp5.entity.Instrumento;
import com.franco.laboratoriotp5.mapper.InstrumentoMapper;
import com.franco.laboratoriotp5.repository.InstrumentoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.rmi.NoSuchObjectException;
import java.util.List;
import java.util.Optional;

@Service
public class InstrumentoService {

    @Autowired
    private InstrumentoRepository instrumentoRepository;


    private InstrumentoMapper instrumentoMapper = InstrumentoMapper.getInstance();

    public List<InstrumentoDTO> listarTodos() {
        return instrumentoMapper.toInstrumentoDTOList(instrumentoRepository.findAll());
    }

    public InstrumentoDTO getOne(Long id) {
        InstrumentoDTO instrumento = instrumentoMapper.toInstrumentoDTO(instrumentoRepository.findById(id).get());
        return instrumento;
    }

    @Transactional
    public void saveList(List<InstrumentoDTO> instrumentos) {
        for (InstrumentoDTO instrumento : instrumentos) {
            instrumentoRepository.save(instrumentoMapper.toEntity(instrumento));
        }
    }

    @Transactional
    public void saveOne(InstrumentoDTO instrumento) {
        instrumentoRepository.save(instrumentoMapper.toEntity(instrumento));

    }

    @Transactional
    public void updateOne(InstrumentoDTO instrumento, Long id) throws NoSuchObjectException {
        try {
            Optional<Instrumento> opt = instrumentoRepository.findById(id);
            if (opt.isPresent()) {
                Instrumento instrumentoUpdate = opt.get();
                instrumentoUpdate.setInstrumento(instrumento.getInstrumento());
                instrumentoUpdate.setImagen(instrumento.getImagen());
                instrumentoUpdate.setMarca(instrumento.getMarca());
                instrumentoUpdate.setImagen(instrumento.getImagen());
                instrumentoUpdate.setModelo(instrumento.getModelo());
                instrumentoUpdate.setCantidadVendida(instrumento.getCantidadVendida());
                instrumentoUpdate.setCostoEnvio(instrumento.getCostoEnvio());
                instrumentoUpdate.setDescripcion(instrumento.getDescripcion());
                instrumentoMapper.toInstrumentoDTO(instrumentoRepository.save(instrumentoUpdate));
            } else {
                throw new NoSuchObjectException("No existe un instrumento con ese ID");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public Resource loadImage(String imageName) {
        try {
            Path imagePath = Paths.get("img/" + imageName);
            Resource resource = new UrlResource(imagePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new RuntimeException("No se encontro la imagen.");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error al cargar el archivo.", e);
        }
    }

    @Transactional
    public void deleteOne(Long id) throws NoSuchObjectException {
        try {
            Optional<Instrumento> opt = instrumentoRepository.findById(id);
            if (opt.isPresent()) {
                instrumentoRepository.deleteById(id);
            } else {
                throw new NoSuchObjectException("No existe un instrumento con ese ID");
            }
        } catch (RuntimeException e){
            e.printStackTrace();
        }
    }

}
