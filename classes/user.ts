class User {
  private userId: number;
  private username: string;
  private password: string;
  private role: 'customer' | 'admin';

  constructor(userId: number, username: string, password: string, role: 'customer' | 'admin') {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.role = role;
  }

 
  public getUserId(): number {
    return this.userId;
  }

  public getUsername(): string {
    return this.username;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRole(): string {
    return this.role;
  }

  public setUsername(username: string): void {
    this.username = username;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public setRole(role: 'customer' | 'admin'): void {
    this.role = role;
  }

 

  // Check login credentials
  public login(inputUsername: string, inputPassword: string): boolean {
    return this.username === inputUsername && this.password === inputPassword;
  }

  // Logout (basic simulation)
  public logout(): string {
    return `${this.username} logged out successfully`;
  }

  // Check if admin
  public isAdmin(): boolean {
    return this.role === 'admin';
  }

  // Display user info (without password)
  public displayInfo(): string {
    return `User ID: ${this.userId}, Username: ${this.username}, Role: ${this.role}`;
  }
}

export default User;