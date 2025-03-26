using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.Application.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }
    public string Local { get; set; }
    
    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    public DateTime? DataEvento { get; set; }

    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [StringLength(50, MinimumLength = 3, ErrorMessage = "Intervalo permitido de 3 a 50 caracteres.")]
    public string Tema { get; set; }

    [Display(Name = "Qtd pessoas")]
    [Range(1, 12000, ErrorMessage = "{0} não pode ser menor que 1 e maior que 12.000.")]
    public int QtdPessoas { get; set; }

    [RegularExpression(@".*\.(gif|jpe?g|bmp|png)$", ErrorMessage = "Não é uma imagem válida. (gif, jpg, jpeg, bmp ou png)")]
    public string ImagemURL { get; set; }

    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [Phone(ErrorMessage = "O campo {0} está com o número inválido.")]
    public string Telefone { get; set; }

    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [Display(Name = "E-mail")]
    [EmailAddress(ErrorMessage = "O campo precisa ser um {0} válido.")]
    public string Email { get; set; }

    public IEnumerable<LoteDto> Lotes { get; set; } = new List<LoteDto>();
    public IEnumerable<RedeSocialDto> RedesSociais { get; set; } = new List<RedeSocialDto>();
    public IEnumerable<PalestranteDto> Palestrantes { get; set; } = new List<PalestranteDto>();

    }
}