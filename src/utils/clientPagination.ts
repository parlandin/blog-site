class Paginate {
  data: any[];
  perPage: number;
  currentPage: number;
  totalPages: number;

  constructor(data: any[], perPage?: number) {
    if (!data) throw new Error("Required Argument Missing");
    if (!Array.isArray(data)) throw new Error("Invalid Argument Type");

    this.data = data;
    this.perPage = perPage || 10;
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.data.length / this.perPage);
  }

  private offset(): number {
    return (this.currentPage - 1) * this.perPage;
  }

  page(pageNum: number): any[] {
    if (pageNum < 1) pageNum = 1;
    if (pageNum > this.totalPages) pageNum = this.totalPages;

    this.currentPage = pageNum;

    const start = this.offset();
    const end = start + this.perPage;

    return this.data.slice(start, end);
  }

  totalPage(): number {
    return this.totalPages;
  }

  next(): any[] {
    return this.page(this.currentPage + 1);
  }

  prev(): any[] {
    return this.page(this.currentPage - 1);
  }

  hasNext(): boolean {
    return this.currentPage < this.totalPages;
  }
}

export default Paginate;
