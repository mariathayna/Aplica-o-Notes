const DB_NAME = 'notasDB';
const STORE_NAME = 'notasStore';

const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onerror = () => {
      reject(`Erro ao abrir o banco de dados: ${request.error}`);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
  });
};

const saveNote = (note) => {
  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        const request = store.add(note);

        request.onerror = () => {
          reject(`Erro ao salvar a nota: ${request.error}`);
        };

        request.onsuccess = (event) => {
          resolve(event.target.result);
        };
      })
      .catch((error) => {
        reject(`Erro ao abrir o banco de dados: ${error}`);
      });
  });
};

const deleteNote = (noteId) => {
  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        const request = store.delete(noteId);

        request.onerror = () => {
          reject(`Erro ao excluir a nota: ${request.error}`);
        };

        request.onsuccess = () => {
          resolve();
        };
      })
      .catch((error) => {
        reject(`Erro ao abrir o banco de dados: ${error}`);
      });
  });
};

export { saveNote, deleteNote };



// const DB_NAME = 'notasDB';
// const STORE_NAME = 'notasStore';

// const openDatabase = () => {
//   return new Promise((resolve, reject) => {
//     const request = indexedDB.open(DB_NAME, 1);

//     request.onerror = (event) => {
//       reject(`Erro ao abrir o banco de dados: ${event.target.error}`);
//     };

//     request.onupgradeneeded = (event) => {
//       const db = event.target.result;

//       if (!db.objectStoreNames.contains(STORE_NAME)) {
//         db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
//       }
//     };

//     request.onsuccess = (event) => {
//       resolve(event.target.result);
//     };
//   });
 
// const saveNote = (note) => {
//   return new Promise((resolve, reject) => {
//     openDatabase()
//       .then((db) => {
//         const transaction = db.transaction([STORE_NAME], 'readwrite');
//         const store = transaction.objectStore(STORE_NAME);

//         const request = store.add(note);

//         request.onerror = (event) => {
//           reject(`Erro ao salvar a nota: ${event.target.error}`);
//         };

//         request.onsuccess = (event) => {
//           resolve(event.target.result);
//         };
//       })
//       .catch((error) => {
//         reject(`Erro ao abrir o banco de dados: ${error}`);
//       });
//   });
// };
// const deleteNote = (noteId) => {
//     return new Promise((resolve, reject) => {
//       openDatabase()
//         .then((db) => {
//           const transaction = db.transaction([STORE_NAME], 'readwrite');
//           const store = transaction.objectStore(STORE_NAME);
  
//           const request = store.delete(noteId);
  
//           request.onerror = (event) => {
//             reject(`Erro ao excluir a nota: ${event.target.error}`);
//           };
  
//           request.onsuccess = (event) => {
//             resolve();
//           };
//         })
//         .catch((error) => {
//           reject(`Erro ao abrir o banco de dados: ${error}`);
//         });
//     });
//   };
// };

// export { saveNote, deleteNote, /* ... (outros métodos) ... */ };

 
//  // // indexedDB.js

// // const DB_NAME = 'anotacoesDB';
// // const STORE_NAME = 'anotacoes';

// // // Função para abrir a conexão com o IndexedDB
// // export function abrirConexao() {
// //   return new Promise((resolve, reject) => {
// //     const request = indexedDB.open(DB_NAME, 1);

// //     request.onerror = (event) => {
// //       reject(`Erro ao abrir o banco de dados: ${event.target.error}`);
// //     };

// //     request.onsuccess = (event) => {
// //       const db = event.target.result;
// //       resolve(db);
// //     };

// //     request.onupgradeneeded = (event) => {
// //       const db = event.target.result;

// //       // Crie um object store (equivalente a uma tabela em um banco de dados relacional)
// //       if (!db.objectStoreNames.contains(STORE_NAME)) {
// //         db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
// //       }
// //     };
// //   });
// // }

// // // Função para salvar uma nota no IndexedDB
// // export function salvarNota(nota) {
// //   return new Promise(async (resolve, reject) => {
// //     try {
// //       const db = await abrirConexao();
// //       const transaction = db.transaction(STORE_NAME, 'readwrite');
// //       const store = transaction.objectStore(STORE_NAME);

// //       // Adicione a nota ao object store
// //       const request = store.add(nota);

// //       request.onerror = (event) => {
// //         reject(`Erro ao salvar a nota: ${event.target.error}`);
// //       };

// //       request.onsuccess = (event) => {
// //         resolve();
// //       };
// //     } catch (error) {
// //       reject(`Erro ao abrir o banco de dados: ${error}`);
// //     }
// //   });
// // }

// // // Função para recuperar todas as notas do IndexedDB
// // export function obterTodasNotas() {
// //   return new Promise(async (resolve, reject) => {
// //     try {
// //       const db = await abrirConexao();
// //       const transaction = db.transaction(STORE_NAME, 'readonly');
// //       const store = transaction.objectStore(STORE_NAME);

// //       const request = store.getAll();

// //       request.onerror = (event) => {
// //         reject(`Erro ao obter as notas: ${event.target.error}`);
// //       };

// //       request.onsuccess = (event) => {
// //         const notas = event.target.result;
// //         resolve(notas);
// //       };
// //     } catch (error) {
// //       reject(`Erro ao abrir o banco de dados: ${error}`);
// //     }
// //   });
// // }
