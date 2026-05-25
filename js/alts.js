
// initComplete: function () {

//     this.api().columns().every( function () {
//       var column = this;
//       var select = $('<select class="form-select" style="width:100%;"><option value="">Cari '+column.title()+'</option></select>')
//           .appendTo( $(column.header()))
//           .on( 'change', function () {
//             console.log('ha')
//               // var val = $.fn.dataTable.util.escapeRegex(
//               //     $(this).val()
//               // );
//               var val = $(this).val()

//               column
//                   .search( val  )
//                   .draw();
//           } );

//       if(column.title() == 'Alokasi Anggaran' || column.title() == 'Realisasi'){
//         select.remove()
//       }

//       if(column[0][0] < 0){
//         let input = $('<input class="form-control" style="width:100%;" placeholder="Cari '+column.title()+'" />');

//         select.remove()
//         input.appendTo($(column.header())).on('keyup', function(){
//             column.search($(this).val()).draw();
//         })
//       }else{
//         column.data().unique().sort().each( function ( d, j ) {
//             select.append( '<option value="'+d+'">'+d+'</option>' )
//         } );
//       }
//     } );
//   },
  