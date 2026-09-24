using System.ComponentModel.DataAnnotations;

public class Domicilio
{
    [Required]
    [MinLength(3)]
    [MaxLength(50)]
    public string Calle { get; set; } = "";
    [Required]
    [MinLength(1)]
    [MaxLength(10)]
    public string NumeroExterior { get; set; } = "";
    public string? NumeroInterior { get; set; }
    [Required]
    [MinLength(3)]
    [MaxLength(50)]
    public string Colonia { get; set; } = "";
    [Required]
    [MinLength(6)]
    [MaxLength(6)]
    public string CodigoPostal { get; set; } = "";
    [Range(1, 20)]
    public int NumeroHabitaciones { get; set; }
}