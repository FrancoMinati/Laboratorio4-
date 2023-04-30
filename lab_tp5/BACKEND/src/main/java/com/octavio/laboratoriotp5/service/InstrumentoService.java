package com.octavio.laboratoriotp5.service;

import com.octavio.laboratoriotp5.entity.Instrumento;
import com.octavio.laboratoriotp5.repository.InstrumentoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class InstrumentoService {

    @Autowired
    private InstrumentoRepository instrumentoRepository;

    public List<Instrumento> listarTodos() {
        return instrumentoRepository.findAll();
    }

    public Instrumento getOne(Long id) {
        Instrumento instrumento = instrumentoRepository.findById(id).get();

        return instrumento;
    }

    @Transactional
    public void saveList(List<Instrumento> instrumentos) {
        for (Instrumento instrumento : instrumentos) {
            instrumentoRepository.save(instrumento);
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

}
