using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class PersonaController : ControllerBase
{

    [HttpGet]
    public ActionResult<Persona> GetPersona()
    {
        Persona persona = new Persona
        {
            Nombre = "Juan",
            PrimerApellido = "Pérez",
            SegundoApellido = "García",
            Edad = 30
        };
        return Ok(persona);
    }

    [HttpGet("lista")]
    public ActionResult<List<Persona>> GetPersonas()
    {

        List<Persona> personas = new List<Persona>();

        personas.Add(new Persona
        {
            Nombre = "Juan",
            PrimerApellido = "Pérez",
            SegundoApellido = "García",
            Edad = 30
        });
        personas.Add(new Persona
        {
            Nombre = "María",
            PrimerApellido = "Hernández",
            SegundoApellido = "Romeo",
            Edad = 20
        });
        personas.Add(new Persona
        {
            Nombre = "Alejandro",
            PrimerApellido = "Huerta",
            Edad = 15
        });

        return Ok(personas);
    }
}