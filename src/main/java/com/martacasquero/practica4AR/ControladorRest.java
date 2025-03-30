package com.martacasquero.practica4AR;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/platos")
public class ControladorRest {

    private final List<ModeloPlatos> listaPlatos = new ArrayList<>();

    // CREAR
    @PostMapping
    public ModeloPlatos crearPlato(@RequestBody ModeloPlatos plato) {
        listaPlatos.add(plato);
        return plato;
    }

    // LEER (todos)
    @GetMapping
    public List<ModeloPlatos> obtenerPlatos() {
        return listaPlatos;
    }

    // LEER (uno por nombre)
    @GetMapping("/{nombre}")
    public ModeloPlatos obtenerPlato(@PathVariable String nombre) {
        return listaPlatos.stream()
                .filter(p -> p.plato().equalsIgnoreCase(nombre))
                .findFirst()
                .orElse(null);
    }

    // ACTUALIZAR (por nombre)
    @PutMapping("/{nombre}")
    public ModeloPlatos actualizarPlato(@PathVariable String nombre, @RequestBody ModeloPlatos nuevoPlato) {
        for (int i = 0; i < listaPlatos.size(); i++) {
            if (listaPlatos.get(i).plato().equalsIgnoreCase(nombre)) {
                listaPlatos.set(i, nuevoPlato);
                return nuevoPlato;
            }
        }
        return null;
    }

    // BORRAR (por nombre)
    @DeleteMapping("/{nombre}")
    public String borrarPlato(@PathVariable String nombre) {
        boolean eliminado = listaPlatos.removeIf(p -> p.plato().equalsIgnoreCase(nombre));
        return eliminado ? "Plato eliminado" : "Plato no encontrado";
    }


}
