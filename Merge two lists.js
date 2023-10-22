class Node {
    constructor(valor){
        this.valor = valor
        this.next = null
    }
}

/* lista 1 */
const a1 = new Node(1);
const b1 = new Node(2);
const c1 = new Node(3);
const d1 = new Node(4);
const e1 = new Node(5);
const f1 = new Node(7)

/* conectar lista o enlazar nodos */
a1.next = b1
b1.next = c1
c1.next = d1
d1.next = e1
e1.next = f1


/* lista 2 */
const a2 = new Node(3);
const b2 = new Node(4);
const c2 = new Node(6);
const d2 = new Node(7);
const e2 = new Node(9);

/*conectar lista o enlazar nodos */
a2.next = b2
b2.next = c2
c2.next = d2
d2.next = e2


const mergeTwolists = (head1, head2) =>{

    let dummy = new Node(-1); 

    /* 
    el uso de este nodo "dummy" nos evita tener que encontrar el primer valor de la lista resultante, generalmente contiene un valor que no va
    a inteferir con los valores de las listas.

    if (head1 === null) return head2;
    if (head2 === null) return head1;

    // determinar el primer nodo de la lista resultante

    if (head1.valor < head2.valor) {
        result = head1;
        head1 = head1.next;
    } else {
        result = head2;
        head2 = head2.next;
    } 
    */

    let current = dummy;
    let result = []

    while(head1 !== null && head2 !== null){

        if(head1.valor < head2.valor){

            current.next = head1
            result.push(head1.valor)
            head1 = head1.next
            

        } else {

            current.next = head2
            result.push(head2.valor)
            head2 = head2.next
            
        }
        current = current.next /* */
    }

    if(head1 !== null){
        current.next = head1
        result.push(head1.valor)
    } else{
        current.next = head2
        result.push(head2.valor)
    }
    console.log(result)
}
mergeTwolists(a1, a2)